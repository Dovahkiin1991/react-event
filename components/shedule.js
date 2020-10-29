
import SheduleChild from './shedule-child';

let shedule = [
  {
    'date' : 'Friday, May 10',
    'events' : [
      {
        'time' : '08:00 - 09:30',
        'type' : 'Registration',
        'location' : 'Main Hall',
        'text' : 'Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce eer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. ',
        'speaker' : {
          'photo' : 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg',
          'name' : 'Elon Mask',
          'position' : 'CEO & Co-Founder at Insider',
        }
      },
      {
        'time' : '09:45 - 12:30',
        'type' : 'JavaScript Tips',
        'location' : 'Main Hall',
        'text' : 'Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculienim adipiscing aliquet. ',
        'speaker' : {
          'photo' : 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg',
          'name' : 'John McCoist',
          'position' : 'CEO & Co-Founder at Insider',
        }
      }
    ],
  },
  {
    'date' : 'Friday, May 11',
    'events' : [
      {
        'time' : '08:00 - 09:30',
        'type' : 'Registration',
        'location' : 'Main Hall',
        'text' : 'Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. ',
        'speaker' : {
          'photo' : 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg',
          'name' : 'John McCoist',
          'position' : 'CEO & Co-Founder at Insider',
        }
      },
      {
        'time' : '09:45 - 12:30',
        'type' : 'JavaScript Tips',
        'location' : 'Main Hall',
        'text' : 'Donec in velit vel ipsum auctor  lacinia est. Proin dictum eipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. ',
        'speaker' : {
          'photo' : 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg',
          'name' : 'John McCoist',
          'position' : 'CEO & Co-Founder at Insider',
        }
      }
    ],
  },
  {
    'date' : 'Friday, May 12',
    'events' : [
      {
        'time' : '08:00 - 09:30',
        'type' : 'Registration',
        'location' : 'Main Hall',
        'text' : 'Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce eer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. ',
        'speaker' : {
          'photo' : 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg',
          'name' : 'Elon Mask',
          'position' : 'CEO & Co-Founder at Insider',
        }
      },
      {
        'time' : '09:45 - 12:30',
        'type' : 'JavaScript Tips',
        'location' : 'Main Hall',
        'text' : 'Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculienim adipiscing aliquet. ',
        'speaker' : {
          'photo' : 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg',
          'name' : 'John McCoist',
          'position' : 'CEO & Co-Founder at Insider',
        }
      }
    ],
  },
]

const sheduleItems = shedule.map((item, index) =>
  <SheduleChild 
    key={index}
    item={item} 
  />
);

export default function Shedule() {
  return (
    <section className="shedule">
      <div className="container">
          <h2>Schedule</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>

        <div className="row">
          {sheduleItems}
        </div>
      </div>

      <style jsx>{`
          .shedule {
            padding-top: 100px;
            padding-bottom: 100px;
          }
          .shedule h2 {
            font-size: 48px;
            font-weight: 700;
            color: rgb(49, 49, 49);
            line-height: 1.25;
            text-align: center;
            display: block;
          }
          .shedule p {
            font-size: 18px;
            color: rgb(97, 97, 97);
            line-height: 1.667;
            text-align: center;
            display: block;
            margin-bottom: 2rem;
          }
      `}</style>
    </section>
  )
}
