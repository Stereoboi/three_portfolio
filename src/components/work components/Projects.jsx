import projPetlyImage from "../../../public/petly.png";
import projFootballImage from "../../../public/football.png";
import projMovieImage from "../../../public/movie.png";
import { Link } from "react-router-dom";
import projNodeImage from "../../../public/node.webp";
// import projNodeImage from "../../../public/node.png";
import {
  MainWrp,
  CardWrp,
  Image,
  HiddenWrp,
  Description,
} from "./Projects.stylrd";

export default function Projects() {
  return (
    <MainWrp>
      <Link
        to={"https://tizenmile.github.io/pets-support-project-frontend/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardWrp>
          <Image src={projPetlyImage} />
          <HiddenWrp>
            <Description>
              Web app, built using Redux and an Express back-end API, allows you
              to easily store data about your pets. You can create categories
              for your pets,and track your pets information.The app stores your
              data in a secure, personal account, so you can access it from
              anywhere and at any time.
            </Description>
          </HiddenWrp>
        </CardWrp>
      </Link>
      <Link
        to={"https://github.com/Stereoboi/final-project-backend"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardWrp>
          <Image src={projNodeImage} />
          <HiddenWrp>
            <Description>
              The API for the "Petly" application is connected to the MongoDB
              database and allows for user registration and login. It also
              enables creating, editing, and retrieving filtered lists of posts.
            </Description>
          </HiddenWrp>
        </CardWrp>
      </Link>
      <Link
        to={"https://football-tracker-steel.vercel.app/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardWrp>
          <Image src={projFootballImage} />
          <HiddenWrp>
            <Description>
              Football Tracker is a responsive web application built using
              Next.js 13 andTypeScript, incorporating best practices from the
              Next.js 13 documentation. It provides a platform for tracking
              football leagues, teams, news, and player information.
            </Description>
          </HiddenWrp>
        </CardWrp>
      </Link>
      <Link
        to={"https://stereoboi.github.io/CinemaHall/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardWrp>
          <Image src={projMovieImage} />
          <HiddenWrp>
            <Description>
              Responsive React app for movie choosing, connected to TMDB API
              Also you can register or log in by using your Google or Facebook
              account and make your private collection, data saved on Firestore.
              Also here implemented private and restricted routs.
            </Description>
          </HiddenWrp>
        </CardWrp>
      </Link>
    </MainWrp>
  );
}
