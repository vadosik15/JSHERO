// eslint-disable-next-line
import { useContext, useState } from 'react';
import { HeroContext } from '../../context';
import { uploadImage } from '../../utils/uploadImage';
import { updateHero } from '../../utils/getAllList';
import { Link } from 'react-router-dom';

export const UpdateHeroPage = () => {
  const { heros } = useContext(HeroContext);

  const heroId = window.location.pathname.split('/').pop();
  const hero = heros.find((hero) => hero._id === heroId);

  if (!hero) {
    return <div>No hero found.</div>;
  }

  const [nickname, setNickname] = useState(hero.nickname);
  const [realName, setRealName] = useState(hero.real_name);
  const [originDescription, setOriginDescription] = useState(hero.origin_description);
  const [superpowers, setSuperpowers] = useState(hero.superpowers);
  const [catchPhrase, setCatchPhrase] = useState(hero.catch_phrase);
  const [imageHero, setImageHero] = useState<string[]>(hero?.images);;

  const handleSave = () => {
    const updatedHero = {
      ...hero,
      nickname,
      real_name: realName,
      origin_description: originDescription,
      superpowers,
      catch_phrase: catchPhrase,
      images: imageHero,
    };

    updateHero(updatedHero);
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
    e.preventDefault();
    const newImages = imageHero.filter((point) => point !== imgPoint)
    setImageHero(newImages)
  }

  return (
    <div className='container-form'>
      <form onSubmit={handleSave} className='formUpdate'>
        <div className='formUpdate__container-input'>
          <label>
            Nickname:
            <input className='input-hero' type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          </label>
        </div>
        <div className='formUpdate__container-input'>
          <label>
            Real Name:
            <input className='input-hero' type="text" value={realName} onChange={(e) => setRealName(e.target.value)} />
          </label>
        </div>
        <div className='formUpdate__container-input'>
          <label>
            Origin Description:
            <input
              className='input-hero'
              type="text"
              value={originDescription}
              onChange={(e) => setOriginDescription(e.target.value)}
            />
          </label>
        </div>
        <div className='formUpdate__container-input'>
          <label>
            Superpowers:
            <input className='input-hero' type="text" value={superpowers} onChange={(e) => setSuperpowers(e.target.value)} />
          </label>
        </div>
        <div className='formUpdate__container-input'>
          <label>
            Catch Phrase:
            <input className='input-hero' type="text" value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} />
          </label>
        </div>
        <div className='formUpdate__container-input__img'>
          <label>
            Image:
            <input className='input-hero' type="file" onChange={(e) => handleImageUpload(e.target.files)} />
          </label>
          <div className='custom-img-container'>
            {
              imageHero.map((img) => {
                return (
                  <div key={img} className='image-container'>
                    <img src={img} alt="" />
                    <button onClick={(e) => deleteImage(e, img)}>delete this image</button>
                  </div>
                );
              })}
          </div>
        </div>
        <Link to={`/`}>
          <button className='btn' type="submit" onClick={() => handleSave()}>Save</button>
        </Link>
      </form>
      </div>
  );
};
