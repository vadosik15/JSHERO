import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FullInfoPage } from '../FullInfoPage/FullInfoPage';
import {ListHeros} from '../ListHeros/ListHeros';
import { UpdateHeroPage } from '../UpdateHeroPage/UpdateHeroPage';
import {CreateHeroPage} from '../CreateHeroPage/CreateHeroPage';

export const MainContainer: React.FC = () => {

  return (
      <Routes>
        <Route path='/' element={<ListHeros />} />
        <Route path="/info/:id" element={<FullInfoPage />} />
        <Route path="/update/:id" element={<UpdateHeroPage />} />
        <Route path='/create' element={<CreateHeroPage />}/>
      </Routes>
  );
};