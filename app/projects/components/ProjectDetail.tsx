'use client';

import { ProjectItem } from '@/app/interfaces';
import { FC } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

interface Props {
  project: ProjectItem;
}
const ProjectDetail: FC<Props> = ({ project }) => {
  return (
    <>
      <h1 className='project-title'>
        {project.name} <span>{project.type}</span>
      </h1>
      <div className='project-wrapper'>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
          }}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className='mySwiper'
        >
          {project.images.map((img) => (
            <SwiperSlide key={img}>
              <img src={img} alt='Project image' />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='project-info'>
          {project.link && (
            <div className='row'>
              <span className='col'>Link:</span>

              <a className='secondary-text' href={project.link}>
                {project.link}
              </a>
            </div>
          )}
          <div className='row'>
            <span className='col'>Tech stack:</span>
            <div className='tags'>
              {project.technologies.map((t) => (
                <span className='tag' style={{ color: t.color }} key={t.name}>
                  {t.name}
                </span>
              ))}
            </div>
          </div>
          <div className='row'>
            <span className='col'>Duration:</span>
            <span>{project.duration}</span>
          </div>
          <div className='row'>
            <span className='col'>Activities:</span>
            {project.activities?.map((activity) => (
              <span key={activity}>{activity};&nbsp;</span>
            ))}
          </div>
        </div>
      </div>
      <p className='description'>{project.description}</p>
    </>
  );
};
export default ProjectDetail;
