import {Link, useLocation} from "react-router-dom";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calender", "Inbox", "History", "Studio", "Commons", "Help"];
    const {pathname} = useLocation();
    console.log(links);
    return (
        <div className="wd-kanbas-navigation h-100">
            <Link to="Dashboard" className={`wd-kanbas-app-logo`}/>
            <div className="list-group">
                {links.map((link) => (
                        <div className={`wd-kanbas-navigation-item ${pathname.includes(link) ? "wd-active": ""}`}>
                            <Link
                                to={`/Kanbas/${link}`}
                                className={`${pathname.includes(link) && "active"}`}>
                                {IconLinks(link)}
                                <p>{link}</p>
                            </Link>
                        </div>
                ))}
            </div>
        </div>
    );
}

function IconLinks(item) {
    // eslint-disable-next-line default-case
    switch (item){
        case "Account": {
            return (<i className="fa-regular fa-circle-user wd-nav-item-icon wd-color-white"></i>);
        }
        case "Dashboard": {
            return (<i className="fa-solid fa-gauge wd-nav-item-icon"></i>);
        }
        case "Courses": {
            return (<i className="fa-solid fa-book wd-nav-item-icon"></i>);
        }
        case "Calender": {
            return (<i className="fa-solid fa-calendar-days wd-nav-item-icon"></i>);
        }
        case "Inbox": {
            return (<i className="fa-solid fa-inbox wd-nav-item-icon"></i>);
        }
        case "History": {
            return (<i className="fa-regular fa-clock wd-nav-item-icon"></i>);
        }
        case "Studio": {
            return (<i className="fa-solid fa-tv wd-nav-item-icon"></i>);
        }
        case "Commons": {
            return (<i className="fa-solid fa-arrow-right-from-bracket wd-nav-item-icon"></i>);
        }
        case "Help": {
            return (<i className="fa-regular fa-circle-question wd-nav-item-icon"></i>);
        }

    }
}
export default KanbasNavigation;