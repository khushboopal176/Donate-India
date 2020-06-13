const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const PORT = 3000

const PublicDirPath= path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/templates/views')
const PartialsPath = path.join(__dirname, '/templates/partials')

app.set('view engine' , 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(PartialsPath)

app.use(express.static(PublicDirPath))

app.use(express.static('public'))




app.get('/donate', (req,res) =>{

      res.render('donate-form'  ,{

      })

    
})



app.listen(PORT, ()=>{
    console.log('Listening...')
})



