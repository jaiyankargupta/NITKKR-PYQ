const {Coursecode} = require("../asset/name-code")
const {bucket } = require("../connection/index")
const {filenames , downloadLinks} = require("../asset/Linkwithname")
 function nameToCode(subname) {
    return Coursecode[subname]


}
function getLinkArr(code)
{
    var returnArr = []
    filenames.map( 
        (filename,index)=>{
            const firsthyphenindex = filename.search("-");
            if(filename.slice(0,firsthyphenindex) == code)
                {
                    returnArr = [...returnArr , [filename , downloadLinks[index]]]
                }

        }
    )
    return returnArr
}


module.exports = {nameToCode,getLinkArr }