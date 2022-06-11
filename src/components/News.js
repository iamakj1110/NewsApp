import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import './News.css'

export class News extends Component {

     
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: 'general'

    }

   
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    static propTypes = {

        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }


    constructor(props) {
        super(props);


        this.state =
        {
            articles: [],
            loading: false,
            page: 1


        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}- NewsMonkey`;
    }
    style = {
        marginTop: " 20px"
    }

    updateNews= async () => {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c1a6ae176954ee69802d3cf787ae76f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(33);
        let data = await fetch(url);
        let parsedData = await data.json()
        this.props.setProgress(77);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false

        })
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {

      
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c1a6ae176954ee69802d3cf787ae76f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ page: this.state.page + 1 })
        let data = await fetch(url);
        let parsedData = await data.json()
       this.setState({
        articles: this.state.articles.concat(parsedData.articles ),
        totalResults: parsedData.totalResults,
            loading: false,
       })


    }


    // handleNextClick = async () => {



    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews();


    // }



    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }





    componentDidMount = async () => {
        this.updateNews();
    }




    render() {



        return (

            <>
               <div className="bg">


                <h2 className="text-center"> NewsMonkey </h2>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    >

                    <div className="container">
                        <div className="row">


                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>

                                    <NewsItem url={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>





                            })}:
                        </div>



                    </div>
                </InfiniteScroll>
</div>




            </>
        )


    }



}

export default News
