export default function SheduleChild(props) {
    console.log(props)
    return (
        <div className="col-md-4 shedule__item">
            <span className="shedule__item--time"></span>
            <span className="shedule__item--type"></span>
            <span className="shedule__item--location"></span>
            
            {/* <p>{props.item.date}</p> */}
        
            <div className="shedule__speaker">
                <div className="left">
                <div className="poster">
                    <img src="" alt=""/>
                </div>
                </div>
                <div className="right">
                <span className="name"></span>
                <span className="position"></span>
                </div>
            </div>
        </div>
    )
  }
  