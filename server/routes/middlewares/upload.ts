import * as fileUpload from 'express-fileupload';
import { ServerRouter, ServerMethod, METHOD } from '../../utils/Router';
import * as multer from 'multer';
let upload = multer({ dest: 'upload/' });

let uploadPageImg = (req, res) => {
    console.log(req.file);
    // if (!req.files)
    //     return res.status(400).send('No files were uploaded.');
    // let file = req.files.filename;
    // const filename = file.filename;
    // file.mv('../../../client/myapp/src/assets/'+filename, function(err) {
    //     if (err)
    //         return res.status(500).send(err);
    //     res.send('File uploaded!');
    // });
}

export default [
    new ServerRouter('/blog').addMethod(new ServerMethod(METHOD.POST, '/pageImages', upload.single('fileInput')).end(uploadPageImg)),
]