import React, { useState } from 'react';
import { Hero } from '../../HeroType';
import { uploadImage } from '../../utils/uploadImage';
import { createHero } from '../../utils/getAllList';
import { Link } from 'react-router-dom';

export const CreateHeroPage: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [originDescription, setOriginDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [imageHero, setImageHero] = useState<string[]>([]);;

  const handleSave = () => {
    const newHero: Hero = {
      nickname,
      real_name: realName,
      origin_description: originDescription,
      superpowers,
      catch_phrase: catchPhrase,
      images: imageHero,
    };

    createHero(newHero);
  };

  const handleImageUpload = (files: any) => {
    uploadImage(files[0], onSuccess, onError);
  };

  const onSuccess = (imageUrl: string) => {
    const newImages = [...imageHero, imageUrl];
    setImageHero(newImages);
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const deleteImage = (e: any, imgPoint: string) => {
    const newImages = imageHero.filter((point) => point !== imgPoint)
    setImageHero(newImages)
  }

  return (
    <div className='container-form'>
      <form onSubmit={handleSave} className='formUpdate'>
        <div>
          <label>
            Nickname:
            <input className='input-hero' type="text" onChange={(e) => setNickname(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Real Name:
            <input className='input-hero' type="text" onChange={(e) => setRealName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Origin Description:
            <input className='input-hero'
              type="text"
              onChange={(e) => setOriginDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Superpowers:
            <input className='input-hero' type="text" onChange={(e) => setSuperpowers(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Catch Phrase:
            <input className='input-hero' type="text" onChange={(e) => setCatchPhrase(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input type="file" onChange={(e) => handleImageUpload(e.target.files)} />
          </label>
          {imageHero.map((img) => {
            return (
              <div className='image-container'>
                <img key={img} src={img} alt="" />
                <button onClick={(e) => deleteImage(e, img)}>delete this image</button>
              </div>
            );
          })}
        </div>
        <Link to={`/`}>
          <button className='btn' type="submit" onClick={() => handleSave()}>Save</button>
        </Link>
      </form>
    </div>
  );
};