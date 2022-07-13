import Image from 'next/image';
import { withTranslation } from 'react-i18next';

import profileImage from '../public/src/assets/images/profile.jpeg';

const Main = ({ t, i18n }) => {
  return (
    <div>
      <div className='main'>
        <div className='main_image'>
          <Image
            src={profileImage}
            width={280}
            height={280}
            alt='Stella Lee'
            className='profile-image'
          />
        </div>
        <div className='main_content'>
          <span>{t('main.name')}</span>
          <br />
          <span>{t('main.jobtitle')}</span>
          <br />
          <span>{t('main.city')}</span>
          <br />
          <span className='gray1'>{t('main.gray1')}</span>
          <br />
          <span className='gray2'>{t('main.gray2')}</span>
          <br />
          <span className='gray3'>{t('main.gray3')}</span>

          <div className='lang_btns'>
            <button
              className='lang_btn'
              onMouseEnter={() => {
                i18n.changeLanguage('en-US');
              }}
            >
              EN
            </button>
            <button
              className='lang_btn'
              onMouseEnter={() => {
                i18n.changeLanguage('fr-FR');
              }}
            >
              FR
            </button>
            <button
              className='lang_btn'
              onMouseEnter={() => {
                i18n.changeLanguage('ko-KR');
              }}
            >
              KR
            </button>
            {/* <button
              className='lang_btn'
              onMouseEnter={() => {
                i18n.changeLanguage('jp-JP');
              }}
            >
              JP
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Main);
