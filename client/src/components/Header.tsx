import Header from "@/views/Header";
import GeoIndicator from "./GeoIndicator";
import NotificationBell from "./NotificationBell";

const HeaderPrincipal = () => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute top-2 right-2 flex items-center">
        <NotificationBell />
      </div>
      <div className="absolute top-2 left-2 flex items-center">
        <GeoIndicator />
      </div>
    </div>
  );
};

export default HeaderPrincipal;


