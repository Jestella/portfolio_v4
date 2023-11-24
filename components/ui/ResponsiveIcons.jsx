import {
  FaCodeBranch,
  FaCode,
  FaWrench,
  FaCog,
  FaStarOfLife,
} from 'react-icons/fa';

const ResponsiveIcons = () => {
  return (
    <div className='image_container hue_shift'>
      <FaCodeBranch className='fa-code-branch responsive_icon' />
      <FaCog className='fa-cog responsive_icon' />
      <FaCode className='fa-code responsive_icon' />
      <FaWrench className='fa-wrench responsive_icon' />
      <FaStarOfLife className='fa-star responsive_icon' />
    </div>
  );
};

export default ResponsiveIcons;
