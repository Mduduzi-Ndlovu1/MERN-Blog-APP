import React from 'react'

const Posts = () => {
  return (
    <div className="post">

        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2023/11/GettyImages-1778704927.jpg?w=730&crop=1" alt="" />

        </div>

        <div className="texts">
          <h2>OpenAI launches a store for custom AI-powered chatbots</h2>
          <p className="info">
            <a className="author">Kyle Wiggers</a>
            <time>2023-11-01 14:56</time>
          </p>
          <p className="summary">
          After telegraphing to devs last week that it would do so, OpenAI has launched a store for GPTs, custom chatbot apps powered by its text- and image-generating AI models (e.g. GPT-4 and DALL-E 3.
          </p>
        </div>
        
        </div> 
  )
}

export default Posts