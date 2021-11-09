import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Business = () => {
    const URL ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=14779e6724cb4d29b72138730af57196";
    const [data,SetData] = useState([])
    const [loading,SetLoading] = useState(true)
    useEffect(() => {
           const fetchData = async (url) => {
               SetLoading(true)
               const request = await axios.get(url);
               SetLoading(false)
               SetData(request.data.articles);
               console.log(request.data.articles)

           }
           fetchData(URL)
    },[]);
    function truncate(str,n) {
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
    return (
        <div>
            {loading && (
                <div className="loader">
                    <div class="spinner-box">
  <div class="leo-border-1">
    <div class="leo-core-1"></div>
  </div> 
  <div class="leo-border-2">
    <div class="leo-core-2"></div>
  </div> 
</div>
                </div>
            )}
        <div className="newsContent">
        {data.map((news) => {
            const {urlToImage,title,url} = news;
            return (
                <>
                <div className="newsContainer">
                   <div className="newsImg">
                      <img src={urlToImage} alt="" />
                    </div>
                    <a href={url} target="_blank">
                    <div className="newsTitle">
                        <h3 className="title">{title}</h3>
                        <div className="newsDescription">
                        <p>{truncate(news.content,190)}</p>
                    </div>
                    </div>
                    </a>
                    <div className="newsButton">
                       <a href={url} target="_blank"> <button className="btn">Read More</button></a>
                    </div>
                  
                   </div>
                   </>
            )
        })}
        </div>
        </div>
    )
}

export default Business;