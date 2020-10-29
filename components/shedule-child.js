export default function SheduleChild(props) {
    console.log(props)
    return (
        <div className="col-lg-4 shedule__item">
            <div className="shedule__item--inner">
                <div className="shedulte__item--header">
                    {props.item.date}
                </div>

                {
                    props.item.events.map(function(item, i){
                        return <div key={i} className={'shedulte__item--event '+ (i%2 ? 'odd' : 'even')}>
                        <span className="shedule__item--time">{item.time}</span>
                        <span className="shedule__item--type">{item.type}</span>
                        <span className="shedule__item--location">{item.location}</span>
                        
                        <p>{item.text}</p>
                    
                        <div className="shedule__speaker">
                            <div className="left">
                                <div className="poster">
                                    <img src={item.speaker.photo} alt=""/>
                                </div>
                            </div>
                            <div className="right">
                                <span className="name">{item.speaker.name}</span>
                                <span className="position">{item.speaker.position}</span>
                            </div>
                        </div>
                    </div>
                    })
                }
                
                
            </div>

            <style jsx>{`
                .shedule__item {

                }
                .shedule__item--inner {
                    border-style: solid;
                    border-width: 1px;
                    border-color: rgb(238, 238, 238);
                    border-radius: 5px;
                    background-color: rgb(255, 255, 255);
                    box-shadow: 0px 7px 27px 0px rgba(0, 0, 0, 0.05);
                }
                .shedulte__item--header {
                    display: block;
                    padding: 15px;
                    font-size: 22px;
                    color: rgb(49, 49, 49);
                    line-height: 1;
                    text-align: left;
                    background-image: -moz-linear-gradient( -86deg, rgb(230,255,175) 0%, rgb(54,242,227) 100%);
                    background-image: -webkit-linear-gradient( -86deg, rgb(230,255,175) 0%, rgb(54,242,227) 100%);
                    background-image: -ms-linear-gradient( -86deg, rgb(230,255,175) 0%, rgb(54,242,227) 100%);
                }
                .shedulte__item--event {
                    border-bottom: 1px solid rgb(238, 238, 238);
                    padding: 20px 15px;
                }
                .odd {
                    background-color: rgb(251, 251, 251);
                }
                .shedule__item--time {
                    font-size: 16px;
                    color: rgb(97, 97, 97);
                    line-height: 1.875;
                    text-align: left;
                    display: block;
                    margin-bottom: 1rem;
                }
                .shedule__item--type {
                    font-size: 20px;
                    font-weight: 700;
                    color: rgb(49, 49, 49);
                    line-height: 1.875;
                    text-align: left;
                    display: block;
                }
                .shedule__item--location {
                    font-size: 16px;
                    color: rgb(97, 97, 97);
                    line-height: 1.875;
                    text-align: left;
                    display: block;
                    margin-bottom: 0.5rem;
                }
                .shedule__item p {
                    font-size: 13px;
                    color: rgb(97, 97, 97);
                    line-height: 1.154;
                    text-align: left;
                    display: block;
                }
                .shedule__speaker {
                    display: flex;
                    align-items: center;
                }
                .shedule__speaker .left {
                    flex: 0 0 60px;
                }
                .shedule__speaker .left .poster {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    overflow: hidden;
                }
                .shedule__speaker .left img {
                    display: block;
                    width: 100%;
                }
                .shedule__speaker .name {
                    font-size: 18px;
                    color: rgb(49, 49, 49);
                    line-height: 1.667;
                    text-align: left;
                    display: block;
                }
                .shedule__speaker .position {
                    font-size: 13px;
                    color: rgb(145, 145, 145);
                    line-height: 1.154;
                    text-align: left;
                    display: block;
                }

                @media (max-width: 992px) {
                    .shedule__item {
                        margin-bottom: 1rem;
                    }
                }
            `}</style>
        </div>
    )
  }
  