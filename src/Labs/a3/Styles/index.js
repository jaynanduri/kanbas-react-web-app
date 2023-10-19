const Styles = () => {
    const colorBlack = {color: "black"};
    const padding10px = {padding: "10px"};
    const bgBlue = {
        "backgroundColor": "lightblue",
        "color": "black",
        ...padding10px
    };
    const bgRed = {
        "backgroundColor": "lightcoral",
        ...colorBlack,
        ...padding10px
    };
    return (
        <>
            <h2>Styles</h2>
            <div style={{"backgroundColor":"lightyellow", "color":"black", padding: "10px"}}>Yellow Background</div>
            <div style={bgRed}>Red Background</div>
            <div style={bgBlue}>Blue Background</div>
        </>
    );
};

export default Styles;