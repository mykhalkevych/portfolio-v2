'use client';

import { ProjectItem } from '@/app/interfaces';
import { FC } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

interface Props {
  project: ProjectItem;
}
const ProjectDetail: FC<Props> = ({ project }) => {
  return (
    <>
      <h1 className='project-title'>
        {project.name} <span>{project.type}</span>
      </h1>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </SwiperSlide>
      </Swiper>
      {project.link && (
        <a className='secondary-text' href={project.link}>
          {project.link}
        </a>
      )}
      <div className='tags'>
        {project.technologies.map((t) => (
          <span className='tag' style={{ color: t.color }} key={t.name}>
            {t.name}
          </span>
        ))}
      </div>

      <p>{project.description}</p>
    </>
  );
};
export default ProjectDetail;
