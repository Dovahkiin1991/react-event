
import SheduleChild from './shedule-child';

let shedule = [
  {
    'date' : 'Friday, May 10',
    'event' : {
      'time' : '08:00 - 09:30',
      'type' : 'Registration',
      'location' : 'Main Hall',
      'text' : 'Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. ',
      'speaker' : {
        'photo' : '',
        'name' : 'John McCoist',
        'position' : 'CEO & Co-Founder at Insider',
      }
    },
    'event' : {
      'time' : '09:45 - 12:30',
      'type' : 'JavaScript Tips',
      'location' : 'Main Hall',
      'text' : 'Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. ',
      'speaker' : {
        'photo' : '',
        'name' : 'John McCoist',
        'position' : 'CEO & Co-Founder at Insider',
      }
    }
  },
  {
    'date' : 'Friday, May 11',
    'event' : {
      'time' : '08:00 - 09:30',
      'type' : 'Registration',
      'location' : 'Main Hall',
      'text' : 'Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. ',
      'speaker' : {
        'photo' : '',
        'name' : 'John McCoist',
        'position' : 'CEO & Co-Founder at Insider',
      }
    },
    'event' : {
      'time' : '09:45 - 12:30',
      'type' : 'JavaScript Tips',
      'location' : 'Main Hall',
      'text' : 'Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. ',
      'speaker' : {
        'photo' : '',
        'name' : 'John McCoist',
        'position' : 'CEO & Co-Founder at Insider',
      }
    }
  }
]

const sheduleItems = shedule.map((item, index) =>
  <SheduleChild 
    key={index}
    item={item.type} 
  />
);

export default function Shedule() {
  return (
    <section className="shedule">
        <div className="container">
            <h2>Shedule</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>

          <div className="row">
            {sheduleItems}
          </div>
        </div>
      </section>
  )
}
