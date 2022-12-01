const Todo = require("../model/schema")
const HTTP = require("../../constant/response.constant");

class class1 {

    static a = async (req, res) => {

        try {
        
            res.render("file");

        } catch (e) {

            console.log(e)

        }

    }

    static b = async (req, res) => {

        try {

            var a = await Todo.find({});

            let data = new Todo({

                image: req.file.filename

            })

            await data.save();

            res.send("file upload")

        } catch (err) {

            console.log(err);

        }

    }

    static c = async (req, res) => {

        try {
        
            res.render("files");
    
        } catch (e) {

            console.log(err);

        }

    }

    static d = async (req, res) => {

        try {

            for(var j = 0 ; j<req.files.length ; j++){

                let data = new Todo({

                    image: req.files[j].filename
    
                })

                await data.save();
                
            }

            res.send("file upload")
            
        } catch (err) {

            console.log(err);

        }

    }

}

module.exports = { class1 };
