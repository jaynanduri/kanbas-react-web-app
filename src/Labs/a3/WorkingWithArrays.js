function WorkingWithArrays() {
    var functionSpeed = 2;
    let blockSpeed = 5;
    const constant1 = functionSpeed - blockSpeed;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let variableArray1 = [
        functionSpeed, blockSpeed, constant1, numberArray1, stringArray1
    ];
    return (
        <>
            <h2>Working with Arrays</h2>
            numberArray1 = {numberArray1}<br/>
            stringArray1 = {stringArray1}<br/>
            variableArray1 = {variableArray1}<br/>
        </>
    );
}
export default WorkingWithArrays;