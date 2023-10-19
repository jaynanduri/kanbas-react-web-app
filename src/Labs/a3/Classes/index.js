import "./index.css";

function Classes() {
    const color = "blue";
    const dangerous = true;
    return (
        <>
            <h2>Classes</h2>
            <div className="wd-bg-yellow wd-fg-black wd-padding-10px">Yellow Background</div>
            <div className="wd-bg-blue wd-fg-black wd-padding-10px">Blue Background</div>
            <div className="wd-bg-red wd-fg-black wd-padding-10px">Red Background</div>
            <div className={`${dangerous ? "wd-bg-red" : "wd-bg-green"} wd-fg-black wd-padding-10px`}>Dynamic Blue Background</div>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>Dynamic Blue Background</div>
        </>
    );
}

export default Classes;