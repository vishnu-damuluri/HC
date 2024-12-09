import Navbar from './Navbar';
import Header from './Header'
import Events from "./Events"
import Gallery from './Gallery'
import Team from "./Team";
import Gallerymain from './Gallerymain';
import Video from './Video';
import Merch from './Merch';

export default function Main() {
  return (
    <div>
<Navbar/>
<Video/>
<Header/>
<Events/>
<Gallerymain/>
<Gallery/>
< Merch/>
<Team/>
    </div>
  )
}
