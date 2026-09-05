import rooftopDeck from "@/assets/rooftop-deck.png";
import rooftopEvening from "@/assets/rooftop-evening.png";
import roomDeluxe from "@/assets/room-deluxe.png";
import corridorLift from "@/assets/corridor-lift.png";
import rooftopLounge from "@/assets/rooftop-lounge.png";
import sunsetView from "@/assets/sunset-view.png";
import mountainView from "@/assets/mountain-view.png";
import lobbyReception from "@/assets/lobby-reception.png";
import rooftopMountains from "@/assets/rooftop-mountains.png";
import diningHall from "@/assets/dining-hall.png";

export const images = {
  rooftopDeck,
  rooftopEvening,
  roomDeluxe,
  corridorLift,
  rooftopLounge,
  sunsetView,
  mountainView,
  lobbyReception,
  rooftopMountains,
  diningHall,
};

export const HOTEL_NAME = "Vista Resort – Centrally Heated & Air Cooled";
export const PHONE_DISPLAY = "+91 78079 18018";
export const PHONE_TEL = "+917807918018";
export const ADDRESS = "Bhajogi, Siyal, Manali, Himachal Pradesh 175131";

export const WHATSAPP_MESSAGE =
  "Hi, I would like to enquire about staying at Vista Resort Manali. Please share room availability, prices and booking details.";

export const whatsappHref = `https://wa.me/917807918018?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const callHref = `tel:${PHONE_TEL}`;
export const directionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=Vista+Resort+-+Centrally+Heated+%26+Air+Cooled+Bhajogi+Siyal+Manali";

export const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.458924891424!2d77.18223271089374!3d32.24573241083911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048733e5afc7b9%3A0xf2ae8d62290a84cd!2sVista%20Resort%20-%20Centrally%20Heated%20%26%20Air%20Cooled!5e0!3m2!1sen!2sin!4v1788594213657!5m2!1sen!2sin";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/about", label: "About" },
  { to: "/amenities", label: "Amenities" },
  { to: "/dining", label: "Dining" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;
