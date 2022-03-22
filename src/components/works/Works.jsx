import "./works.scss"
import  {useState} from "react"

function Works() {
    const [currentSlide, setCurrrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsu is simply dummy text of the priing and typesetting industry.",
        img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/03/105314181.jpg?auto=format&q=60&w=450&h=270&fit=crop&crop=faces",
    },
    
    {
      
        id: "2",
        icon: "assets/globe.png",
        title: "Mobile Application",
        desc:
          "Lorem Ipsu is simply dummy text of the priing and typesetting industry.",
          img:
          "https://i.pinimg.com/originals/e9/c9/2f/e9c92f869d682a6fa5a97fb8a298f30.jpg",
      },
    
    {
      id: "3",
      icon: "assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsu is simply dummy text of the priing and typesetting industry.",
        img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    }
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
    setCurrrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
      {data.map(d=>(
        <div className="container">
      
        
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                  <div className="imgContainer">
                      <img src={d.icon} alt=""/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                      {d.desc}
                  </p>
                  <span>Projects</span>
              </div>
            </div>
            <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/09/remote_work_infographic_blog.png?auto=format&q=60&w=450&h=270&fit=crop&crop=faces"
                  alt=""
                />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() =>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() =>handleClick()}/>
    </div>
  )
}

export default Works