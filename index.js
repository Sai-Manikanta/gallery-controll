const express = require('express');
const ImageKit = require("imagekit");
const cors = require('cors');

const app = express();

app.use(cors());

var imagekit = new ImageKit({
    publicKey : "public_6Z7p3M/rOoplkEAkbXolSXM41IA=",
    privateKey : "private_wLUT2VONqgcszUtrgyWnv9V2aV8=",
    urlEndpoint : "https://ik.imagekit.io/42vct06fb/"
});

app.delete('/delete-gallery/:id', (req, res) => {
    const { id } = req.params;
    imagekit.deleteFile(id, function(error, result) {
        if(!error) {
            res.status(200).json({
                status: 'success',
                message: `Deleted Gallery with id: ${id}.`,
                result
            })
        } else {
            res.status(400).json({
                status: 'fail',
                error
            })
        }
    });
})

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server Started`));

