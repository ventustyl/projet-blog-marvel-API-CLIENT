import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Write = () => {
  const [value, setValue] = useState('');
  return (
    <div className='ajouter'>
      <div className='content'>
        <input type="text" placeholder='Titre' />
        <div className='editeur'>
          <ReactQuill className='quill' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>

      <div className='menu'>
        <div className='item'>
          <h1>Publier</h1>
          <span>
            <b>Etat :</b> Brouillon
          </span>
          <span>
            <b>Visibilité :</b> Public
          </span>
          <input className='download' type="file" name="" id="file" />
          <label className="telechargement" htmlFor="file">Upload Image</label>
          <div className='bouton'>
            <button>Brouillon</button>
            <button>Mise à jour</button>
          </div>
        </div>
        <div className='item'>
          <h1>Catégories</h1>
          <div className='cat'>
          <input type="radio" name="cat" value="film" id="film" />
          <label htmlFor='film'>Film</label>
          </div>
          <div className='cat'>
          <input type="radio" name="cat" value="serie" id="serie" />
          <label htmlFor='serie'>Serie</label>
          </div>
          <div className='cat'>
          <input type="radio" name="cat" value="personnage" id="personnage" />
          <label htmlFor='personnage'>Personnage</label>
          </div>
          <div className='cat'>
          <input type="radio" name="cat" value="blog" id="blog" />
          <label htmlFor='blog'>Blog</label>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Write
