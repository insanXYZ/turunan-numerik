import Logo from "../moleculs/logo";
import DrawerButton from "../moleculs/drawer_button";

export default () => {
  return (
    <div className="flex items-center justify-center py-5">
      <div className="wrapper h-14 border-primary rounded-sm border-2 flex items-center px-6 place-content-between">
        <Logo />
        <DrawerButton />
      </div>
    </div>
  );
};
