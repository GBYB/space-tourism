import logo from "./../assets/shared/logo.svg";
import close from "./../assets/shared/icon-close.svg";
import bar from "./../assets/shared/icon-hamburger.svg";

import homeDesktop from "./../assets/home/background-home-desktop.jpg";
import homeTablet from "./../assets/home/background-home-tablet.jpg";
import homeMobile from "./../assets/home/background-home-mobile.jpg";

import destinationDesktop from "./../assets/destination/background-destination-desktop.jpg";
import destinationTablet from "./../assets/destination/background-destination-tablet.jpg";
import destinationMobile from "./../assets/destination/background-destination-mobile.jpg";
import europa from "./../assets/destination/image-europa.png";
import moon from "./../assets/destination/image-moon.png";
import mars from "./../assets/destination/image-mars.png";
import titan from "./../assets/destination/image-titan.png";

import crewDesktop from "./../assets/destination/background-destination-desktop.jpg";
import crewTablet from "./../assets/destination/background-destination-tablet.jpg";
import crewMobile from "./../assets/destination/background-destination-mobile.jpg";
import douglas from "./../assets/crew/image-douglas-hurley.png";
import anousheh from "./../assets/crew/image-anousheh-ansari.png";
import victor from "./../assets/crew/image-victor-glover.png";
import mark from "./../assets/crew/image-mark-shuttleworth.png";

import techDesktop from "./../assets/technology/background-technology-desktop.jpg";
import techTablet from "./../assets/technology/background-technology-tablet.jpg";
import techMobile from "./../assets/technology/background-technology-mobile.jpg";
import vehiclePort from "./../assets/technology/image-launch-vehicle-portrait.jpg";
import vehicleLand from "./../assets/technology/image-launch-vehicle-landscape.jpg";
import capsulePort from "./../assets/technology/image-space-capsule-portrait.jpg";
import capsuleLand from "./../assets/technology/image-space-capsule-landscape.jpg";
import portPort from "./../assets/technology/image-spaceport-portrait.jpg";
import portLand from "./../assets/technology/image-spaceport-landscape.jpg";
const assets = {
    shared: {
        logo, close, bar
    },
    home: {
        homeDesktop, homeTablet, homeMobile
    },
    destination: {
        destinationDesktop, destinationTablet, destinationMobile, moon, europa, mars, titan,
    },
    crew: {
        crewDesktop, crewTablet, crewMobile, douglas, anousheh, victor, mark
    },
    technology: {
        techDesktop, techTablet, techMobile, vehicleLand, vehiclePort, portLand, portPort, capsuleLand, capsulePort
    }
}
export default assets;
