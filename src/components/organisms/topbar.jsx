import Logo from "../moleculs/logo";
import DrawerButton from "../moleculs/drawer_button";
// import DropdownButton from "../moleculs/dropdown_button"

export default () => {
  return (
    <div className="sticky top-5 w-full flex justify-center z-10">
      <div className="container h-14 bg-white border-primary rounded-sm border-2 flex items-center px-6 place-content-between">
        <Logo />
        <DrawerButton />
        {/* <DropdownButton/> */}
      </div>
    </div>
  );
};
