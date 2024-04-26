"use client"



import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import useSWR from 'swr';
import { BlogItemProps } from './blog';
import BlogCardNewSkeleton from './BlogCardNewSkeleton';
import BlogCardNew from './BlogCardNew';
import gasImg from '~/assets/images/gas.avif';



const BlogCarousel = () => {
 

  let data1: BlogItemProps = {
    id: 1,
  date: '2019-10-25T08:10:00Z',
  modified: "2019-10-25T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: {
    rendered: "default",
  },
  content: {
    rendered: "default",
    markdown: "default",
    protected: true,
  },
  excerpt: {
    rendered: "default",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  total_views_count: 2,  
  }


  let data2: BlogItemProps = {
    id: 1,
  date: '2019-10-25T08:10:00Z',
  modified: "2019-10-25T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "default",
  },
  content: {
    rendered: "default",
    markdown: "default",
    protected: true,
  },
  excerpt: {
    rendered: "default",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  total_views_count: 2,  
  }


  const blogData: BlogItemProps[] = [data1, data2]

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const renderBlogCards = () => {
    if (false) {
      return Array.from({ length: 3 }, (_, index) => (
        <BlogCardNewSkeleton key={index} />
      ));
    }

    return blogData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className='min-w-[326px] gap-x-5'
      >
        <BlogCardNew {...item} />
      </motion.div>
    ));
  };

  return (
    <div
      className='flex p-1 gap-4 overflow-x-scroll scrollbar-hide'
      {...events}
      ref={ref}
    >
      {renderBlogCards()}
    </div>
  );
};

export default BlogCarousel;
