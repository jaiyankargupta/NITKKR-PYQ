const express = require("express")
const router = express.Router()
const { bucket } = require("../connection/index")
const { nameToCode, getLinkArr } = require("../controller/index")

router.get('/:filename', async (req, res) => {
  const filename = req.params.filename;
  const file = bucket.file(filename);

  try {
    const [metadata] = await file.getMetadata();

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', metadata.contentType);

    const readStream = file.createReadStream();

    readStream.on('error', (err) => {
      res.status(500).send(err.message);
    });

    readStream.on('end', () => {
      res.end();
    });

    readStream.pipe(res);
  } catch (error) {
    res.status(404).send('File not found');
  }
});


router.get("/paperlinkarr/:code", (req, res) => {
  const requestcode = req.params.code;

  const code = requestcode
  try {
    const dataArr = getLinkArr(code);
    res.status(200).send(dataArr)
  } catch (error) {
    res.status(400).send([error])
  }


})


module.exports = { router }















router.get("/course")

module.exports = { router };
