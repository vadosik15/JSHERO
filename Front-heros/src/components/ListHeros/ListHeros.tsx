import React, { useContext, useState, useEffect } from 'react';
import { HeroContext } from '../../context';
import { Hero } from '../../HeroType';
import { Link } from 'react-router-dom';


export const ListHeros: React.FC = () => {
  const { heros, getAllHeros } = useContext(HeroContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems] = useState(true);
  const [maxPage, setMaxPage] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const newHeros = await getAllHeros(currentPage, 5);
      if (newHeros.length < 5) {
        setMaxPage(false);
      } else {
        setMaxPage(true);
      }
    };

    fetchData();

  }, [currentPage]);

  const handleNextPage = () => {
    if (maxPage) {
      setCurrentPage(currentPage + 1);
      console.log(hasMoreItems);
      console.log(currentPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setMaxPage(true);
      console.log(currentPage);
    } else {
      console.log(currentPage);
    }
  };

  return (
    <div>
      <div className='btn-conatiner'>
        <button className='button-slide' onClick={handlePrevPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192" fill="none">
            <path d="M169.625 129.707C166.158 127.195 163.729 124.709 164.168 120.422L164.169 120.413C164.203 120.046 164.051 119.771 163.95 119.63C163.846 119.484 163.724 119.378 163.638 119.31C163.463 119.172 163.254 119.052 163.085 118.962C162.915 118.87 162.769 118.796 162.639 118.73C162.451 118.635 162.299 118.558 162.158 118.469L161.085 117.792L160.782 118.685C160.76 118.654 160.737 118.622 160.713 118.592M169.625 129.707L159.929 119.213M169.625 129.707C171.1 128.663 171.762 127.806 171.975 126.968C172.213 126.029 171.962 124.82 170.938 122.903L170.938 122.903C170.287 121.684 169.673 120.427 169.069 119.19C168.797 118.635 168.528 118.084 168.258 117.542C167.378 115.773 166.475 114.065 165.419 112.477L165.419 112.476C164.398 110.936 162.695 110.294 161.333 111.126L159.812 112.054V110.272C159.812 109.717 159.82 109.179 159.828 108.654C159.847 107.38 159.865 106.176 159.764 104.96L159.764 104.957C159.756 104.864 159.699 104.676 159.544 104.437C159.396 104.208 159.209 104.009 159.046 103.884C157.855 102.995 156.607 102.114 155.346 101.224C153.365 99.8255 151.352 98.4045 149.478 96.8943M169.625 129.707L68.5563 103.269C69.4756 104.288 70.4846 105.231 71.4556 106.139C71.6068 106.28 71.7571 106.421 71.906 106.56C73.0268 107.612 74.0816 108.636 74.9791 109.767C76.135 111.225 77.0156 112.843 77.9477 114.557C78.374 115.34 78.8111 116.143 79.2902 116.96L79.6754 117.617L80.4108 117.421C82.0198 116.991 83.236 117.567 84.6202 118.617C84.9683 118.882 85.3153 119.167 85.6806 119.469L85.7518 119.528C86.0907 119.808 86.4458 120.101 86.8103 120.384C87.5898 120.988 88.4631 121.583 89.4693 121.98L90.3108 122.312L90.725 121.507C93.6578 115.814 94.7503 109.751 94.2505 103.391M160.713 118.592C160.713 118.592 160.712 118.591 160.712 118.591L159.929 119.213M160.713 118.592C160.713 118.592 160.713 118.592 160.713 118.593L159.929 119.213M160.713 118.592C159.174 116.646 157.687 114.666 156.191 112.674C155.581 111.861 154.969 111.047 154.352 110.231M159.929 119.213C158.381 117.256 156.883 115.26 155.384 113.264C154.775 112.454 154.166 111.643 153.554 110.835M154.352 110.231C154.352 110.231 154.352 110.232 154.352 110.232L153.554 110.835M154.352 110.231C154.09 109.886 153.761 109.609 153.482 109.403L153.482 109.403C152.358 108.576 151.237 107.755 150.117 106.936C148.567 105.801 147.019 104.669 145.473 103.524M154.352 110.231L153.554 110.835M153.554 110.835L145.473 103.524M145.473 103.524C145.473 103.524 145.473 103.524 145.473 103.524L144.876 104.326M145.473 103.524L152.889 110.208C151.771 109.385 150.651 108.566 149.532 107.746C147.977 106.609 146.423 105.472 144.876 104.326M145.473 103.524C145.472 103.523 145.472 103.523 145.471 103.523L144.876 104.326M145.473 103.524C145.14 103.276 144.811 103.036 144.486 102.799C143.374 101.986 142.312 101.21 141.341 100.319L141.339 100.318C140.569 99.6143 139.843 98.8433 139.085 98.04C139.038 97.9899 138.991 97.9397 138.943 97.8894C138.145 97.0431 137.311 96.1663 136.405 95.3738C134.607 93.8004 132.476 92.5121 129.585 92.2925M144.876 104.326C144.56 104.091 144.242 103.859 143.924 103.626C142.803 102.807 141.682 101.988 140.665 101.056L129.43 92.2818L129.431 92.2819M129.585 92.2925C129.608 92.3142 129.624 92.328 129.634 92.3354C129.635 92.3357 129.635 92.336 129.636 92.3363M129.585 92.2925C129.561 92.2687 129.529 92.2353 129.491 92.1904C129.347 92.0188 129.204 91.7853 129.112 91.5921L129.109 91.587C127.24 87.7573 123.984 86.1181 120.216 85.2828L120.215 85.2828C117.913 84.7734 115.622 84.0709 113.698 82.9557M129.585 92.2925C129.534 92.2887 129.483 92.2851 129.431 92.2819M129.636 92.3363C129.64 92.3386 129.641 92.3399 129.642 92.3401C129.642 92.3403 129.64 92.3391 129.636 92.3363ZM129.636 92.3363C129.616 92.3246 129.546 92.2891 129.431 92.2819M129.431 92.2819L113.698 82.9557M113.698 82.9557C113.698 82.9559 113.698 82.9561 113.699 82.9563L113.196 83.8208M113.698 82.9557L128.21 92.0256C126.527 88.576 123.609 87.0592 119.999 86.2592C117.657 85.7408 115.25 85.0112 113.196 83.8208M113.698 82.9557C113.698 82.9556 113.697 82.9556 113.697 82.9555L113.196 83.8208M113.698 82.9557C112.052 81.9989 110.376 81.5492 108.904 82.1379C107.41 82.7358 106.531 84.238 106.089 86.2061C105.81 87.4491 105.52 88.696 105.229 89.9469C104.305 93.9265 103.372 97.9454 102.724 101.999C102.265 104.872 102.055 107.842 101.849 110.762C101.732 112.426 101.616 114.073 101.455 115.676L101.455 115.68C101.401 116.247 101.096 116.885 100.687 117.619L100.687 117.619C100.454 118.038 100.177 118.43 99.8633 118.871C99.7949 118.968 99.7247 119.067 99.6529 119.169C99.2714 119.712 98.8551 120.333 98.5632 121.038L98.563 121.039C97.3083 124.075 95.175 126.198 92.2807 127.84C90.7795 128.691 89.637 129.008 88.6334 128.946C87.6401 128.885 86.627 128.443 85.4022 127.453L85.2914 127.363C83.7064 126.08 81.8407 124.569 79.7339 123.864C77.2729 123.04 75.8547 121.409 74.5851 119.163C74.5561 119.111 74.5124 119.029 74.4605 118.931C74.3446 118.712 74.1874 118.415 74.0579 118.208C73.9496 118.036 73.8076 117.832 73.6302 117.656C73.4623 117.489 73.1698 117.254 72.7551 117.198L72.7543 117.198C71.2236 116.99 70.3089 116.111 69.387 114.855C69.1623 114.549 68.9446 114.23 68.7152 113.895L68.6912 113.86C68.4564 113.517 68.2095 113.157 67.9484 112.805C67.4269 112.102 66.8179 111.387 66.0359 110.807C64.5156 109.676 63.2475 108.138 62.0165 106.402C61.5054 105.681 61.0103 104.94 60.5065 104.186C60.4043 104.033 60.3017 103.88 60.1985 103.726C59.5916 102.82 58.9685 101.903 58.3096 101.026C58.1249 100.779 57.9829 100.505 57.7999 100.151C57.7498 100.054 57.6967 99.951 57.6388 99.8413C57.3992 99.3872 57.071 98.8052 56.5475 98.3648M113.196 83.8208C110.092 82.016 107.89 82.7456 107.065 86.4256L46.5656 64.9024L45.7641 65.5004C45.7638 65.5 45.7635 65.4996 45.7633 65.4992C45.2509 64.8126 44.9944 64.473 44.6774 64.2695C44.4406 64.1175 44.0728 63.9882 43.2296 64.1179L43.2294 64.118C42.0925 64.2925 40.9667 63.9224 40.0554 63.5897C39.8793 63.5254 39.7096 63.4619 39.5452 63.4005C38.7757 63.1127 38.1226 62.8685 37.4701 62.7836L37.4695 62.7835C37.2349 62.7528 37.0016 62.721 36.7697 62.6893C35.8756 62.5673 35.0009 62.448 34.1425 62.4068C33.0679 62.3553 32.1381 62.4361 31.3823 62.7382C31.3825 62.7387 31.2964 62.7841 31.1594 63.0167C31.0181 63.2566 30.8805 63.5976 30.747 64.0315C30.5675 64.6151 30.4323 65.2295 30.2958 65.8496C30.2217 66.1865 30.1472 66.5252 30.065 66.8614L30.0644 66.8639C29.882 67.6018 29.8268 68.3851 29.8177 69.2364C29.8136 69.6204 29.8188 70.0068 29.8242 70.4078L29.826 70.5395C29.8318 70.9827 29.8366 71.4424 29.8261 71.9042C29.7841 73.7622 29.4954 75.7805 27.9308 77.6312L27.9307 77.6313C27.6631 77.9478 27.4749 78.4509 27.3326 79.179C27.2636 79.5319 27.211 79.9044 27.1573 80.3005L27.141 80.4213C27.0936 80.7726 27.0434 81.1439 26.9807 81.4988L26.9805 81.4999C26.4465 84.5015 24.901 87.0733 23.4688 89.4562C23.3457 89.6612 23.2234 89.8647 23.1026 90.067C21.5403 92.6839 20.2063 95.1322 20.0571 98.0219C20.0187 98.7858 20.1317 99.5877 20.3076 100.465C20.3667 100.76 20.4363 101.077 20.5082 101.404C20.5687 101.679 20.6308 101.962 20.6895 102.245C20.8573 102.227 21.0234 102.213 21.186 102.199C21.319 102.188 21.4486 102.177 21.5755 102.167C21.9243 102.139 22.2531 102.112 22.5791 102.075C23.4939 101.968 24.0891 101.796 24.4462 101.498L24.4473 101.497C29.5878 97.2165 34.138 92.618 35.7518 86.1081L35.7519 86.1074C36.1516 84.5005 36.3122 82.8798 36.4808 81.1797C36.5613 80.3673 36.6436 79.5367 36.7547 78.6809L36.8254 78.1364L37.3227 77.9038C37.5227 77.8102 37.7241 77.7167 37.9239 77.6241C38.1241 77.5311 38.3227 77.439 38.5195 77.3469L39.2023 77.0276L39.6973 77.596C40.0155 77.9615 40.3637 78.3386 40.7229 78.7277C41.5813 79.6574 42.5031 80.656 43.2326 81.7289C43.7225 82.445 44.1097 83.2134 44.4583 83.9407C44.5356 84.1021 44.6107 84.2605 44.6845 84.4164C44.9531 84.9834 45.2053 85.5158 45.4924 86.0302C46.2034 87.3041 47.0409 88.3005 48.5004 88.8415L48.5039 88.8428C48.8648 88.9782 49.1177 89.2261 49.2847 89.4369C49.4559 89.6529 49.5878 89.8945 49.6901 90.1146C49.8932 90.5517 50.0411 91.0426 50.1419 91.3828C50.6088 92.9379 51.5113 94.1114 52.656 95.1849C53.233 95.7261 53.8625 96.2335 54.527 96.7545C54.6598 96.8586 54.7945 96.9636 54.9304 97.0696C55.464 97.4857 56.0167 97.9166 56.5475 98.3648M56.5475 98.3648C56.5472 98.3646 56.547 98.3644 56.5467 98.3641L55.9032 99.1296L56.5484 98.3655C56.5481 98.3653 56.5478 98.3651 56.5475 98.3648ZM149.478 96.8943C149.478 96.8945 149.478 96.8947 149.479 96.8948L150.105 96.1152L149.477 96.8938C149.478 96.894 149.478 96.8941 149.478 96.8943ZM149.478 96.8943C148.394 96.0236 147.435 95.0252 146.527 94.0602C146.433 93.9595 146.339 93.8592 146.245 93.7594C145.428 92.888 144.646 92.0549 143.797 91.3018L143.796 91.3015C142.531 90.1782 141.218 89.1722 139.875 88.1424C139.059 87.5162 138.23 86.8813 137.394 86.2057C137.114 85.98 136.851 85.7599 136.597 85.5476C135.818 84.8962 135.126 84.3172 134.295 83.8688L134.235 83.8361L134.179 83.7954C133.471 83.2762 132.76 82.7569 132.05 82.2373C130.626 81.197 129.201 80.1551 127.783 79.1086L127.781 79.1069C127.61 78.98 127.462 78.8348 127.35 78.7204C127.301 78.6702 127.252 78.6186 127.209 78.5731L127.188 78.5513C127.137 78.4982 127.094 78.4534 127.054 78.4127C127.02 78.379 126.993 78.3533 126.971 78.3339C124.049 78.2551 121.395 77.2685 118.925 76.3153C118.81 76.2709 118.695 76.2266 118.581 76.1825C116.144 75.2403 113.889 74.3683 111.492 74.1942C108.902 74.0092 106.386 74.1644 104.888 76.5895L104.888 76.5901C104.445 77.3054 103.766 77.7922 103.197 78.1618C103.012 78.2816 102.84 78.3892 102.678 78.4905C102.283 78.7372 101.948 78.9466 101.64 79.2046C101.454 79.3609 101.254 79.5165 101.069 79.6601C101.039 79.683 101.01 79.7056 100.982 79.7279C100.766 79.896 100.57 80.0508 100.394 80.2064C100.024 80.533 99.85 80.7706 99.7891 80.9508C97.7189 87.1807 95.7396 93.438 93.9271 99.7371C93.8164 100.125 93.832 100.61 93.9305 101.267C93.9574 101.446 93.9935 101.651 94.0321 101.871C94.1166 102.352 94.2131 102.901 94.2505 103.391M94.2505 103.391C94.2505 103.391 94.2505 103.391 94.2505 103.39L93.2536 103.469L94.2507 103.393C94.2506 103.392 94.2506 103.391 94.2505 103.391ZM65.9426 74.6743C67.1184 75.1013 67.4972 75.5759 67.595 75.9049C67.6937 76.2367 67.6293 76.832 66.9138 77.7986L66.9122 77.8008C66.7315 78.0463 66.278 78.4106 65.5368 78.8083C64.8271 79.1892 63.9561 79.5467 63.0617 79.8229C62.1647 80.0999 61.2795 80.2842 60.5408 80.3383C59.7487 80.3963 59.3231 80.2888 59.1735 80.1935L59.1729 80.1931C57.7701 79.3004 56.1253 78.896 54.6783 78.5403C54.3517 78.46 54.0351 78.3821 53.7337 78.3017C52.0149 77.8432 50.6064 77.2837 49.582 75.9382C49.4008 75.6999 49.1658 75.598 49.0049 75.556C48.8552 75.5171 48.726 75.5175 48.6587 75.5199C48.5274 75.5244 48.3902 75.549 48.3092 75.5635L48.3085 75.5636C48.2682 75.5708 48.2261 75.5786 48.1816 75.5869C48.0042 75.6197 47.7879 75.6597 47.4879 75.7001L45.7502 75.9346L46.8367 77.3108C47.0892 77.6306 47.3041 77.9216 47.5169 78.2095C47.6205 78.3499 47.7237 78.4895 47.8303 78.6314C48.1433 79.0475 48.472 79.4622 48.8594 79.8423C48.8598 79.8427 48.8602 79.8431 48.8606 79.8435L49.5608 79.1296L65.9426 74.6743ZM65.9426 74.6743C64.4572 74.135 62.9477 73.6528 61.4168 73.1657L61.2773 73.1213C59.798 72.6507 58.2986 72.1737 56.8153 71.6426M65.9426 74.6743L53.7723 69.7599C53.7718 69.7595 53.7714 69.759 53.7709 69.7586C54.6177 70.5899 55.7168 71.2522 56.8153 71.6426M56.8153 71.6426C56.8156 71.6428 56.816 71.6429 56.8164 71.6431L57.1512 70.7008L56.8141 71.6422C56.8145 71.6424 56.8149 71.6425 56.8153 71.6426ZM126.907 78.2811C126.907 78.2811 126.908 78.2817 126.909 78.2827L126.909 78.2823C126.908 78.2815 126.907 78.2811 126.907 78.2811ZM68.556 103.268C67.7326 102.357 66.9975 101.317 66.3068 100.341C66.1036 100.053 65.9042 99.7716 65.7076 99.5C64.8135 98.2651 63.9463 97.1954 62.898 96.4303L68.556 103.268Z" fill="#EE7828" stroke="#202020" stroke-width="2" />
          </svg>
        </button>
        <button className='button-slide' onClick={handleNextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192" fill="none">
            <path d="M22.4834 129.707C25.95 127.195 28.3784 124.709 27.9395 120.422L27.9386 120.413C27.9045 120.046 28.0571 119.771 28.1581 119.63C28.2622 119.484 28.3834 119.378 28.4699 119.31C28.6447 119.172 28.8542 119.052 29.0226 118.962C29.193 118.87 29.3392 118.796 29.4688 118.73C29.6565 118.635 29.8092 118.558 29.9495 118.469L31.023 117.792L31.3255 118.685C31.3479 118.654 31.3713 118.622 31.3951 118.592M22.4834 129.707L32.1791 119.213M22.4834 129.707C21.0075 128.663 20.3458 127.806 20.1332 126.968C19.8946 126.029 20.1459 124.82 21.17 122.903L21.1701 122.903C21.8209 121.684 22.4349 120.427 23.0393 119.19C23.3105 118.635 23.5798 118.084 23.8496 117.542C24.73 115.773 25.6327 114.065 26.6887 112.477L26.6894 112.476C27.7102 110.936 29.4128 110.294 30.775 111.126L32.2959 112.054V110.272C32.2959 109.717 32.2878 109.179 32.2799 108.654C32.2608 107.38 32.2427 106.176 32.3437 104.96L32.3439 104.957C32.3514 104.864 32.4093 104.676 32.564 104.437C32.7117 104.208 32.8986 104.009 33.0623 103.884C34.2534 102.995 35.501 102.114 36.7614 101.224C38.7429 99.8255 40.7558 98.4045 42.6299 96.8943M22.4834 129.707L123.552 103.269C122.632 104.288 121.623 105.231 120.652 106.139C120.501 106.28 120.351 106.421 120.202 106.56C119.081 107.612 118.026 108.636 117.129 109.767C115.973 111.225 115.092 112.843 114.16 114.557C113.734 115.34 113.297 116.143 112.818 116.96L112.433 117.617L111.697 117.421C110.088 116.991 108.872 117.567 107.488 118.617C107.14 118.882 106.793 119.167 106.427 119.469L106.356 119.528C106.017 119.808 105.662 120.101 105.298 120.384C104.518 120.988 103.645 121.583 102.639 121.98L101.797 122.312L101.383 121.507C98.4501 115.814 97.3576 109.751 97.8574 103.391M31.3951 118.592C31.3953 118.592 31.3956 118.591 31.3958 118.591L32.1791 119.213M31.3951 118.592C31.3949 118.592 31.3948 118.592 31.3947 118.593L32.1791 119.213M31.3951 118.592C32.9341 116.646 34.4211 114.666 35.9165 112.674C36.527 111.861 37.1389 111.047 37.7564 110.231M32.1791 119.213C33.7265 117.256 35.2253 115.26 36.7239 113.264C37.3327 112.454 37.9415 111.643 38.5535 110.835M37.7564 110.231C37.7563 110.231 37.7562 110.232 37.7561 110.232L38.5535 110.835M37.7564 110.231C38.0179 109.886 38.3464 109.609 38.6259 109.403L38.6263 109.403C39.7497 108.576 40.8709 107.755 41.9907 106.936C43.5412 105.801 45.0888 104.669 46.6354 103.524M37.7564 110.231L38.5535 110.835M38.5535 110.835L46.6354 103.524M46.6354 103.524C46.6352 103.524 46.635 103.524 46.6348 103.524L47.2319 104.326M46.6354 103.524L39.2191 110.208C40.3368 109.385 41.4566 108.566 42.5764 107.746C44.1305 106.609 45.6845 105.472 47.2319 104.326M46.6354 103.524C46.6359 103.523 46.6364 103.523 46.6369 103.523L47.2319 104.326M46.6354 103.524C46.9677 103.276 47.2968 103.036 47.6215 102.799C48.7338 101.986 49.7956 101.21 50.7674 100.319L50.7687 100.318C51.5385 99.6143 52.2654 98.8433 53.0226 98.04C53.0699 97.9899 53.1172 97.9397 53.1647 97.8894C53.9629 97.0431 54.7974 96.1663 55.703 95.3738C57.501 93.8004 59.6318 92.5121 62.5227 92.2925M47.2319 104.326C47.5477 104.091 47.866 103.859 48.1843 103.626C49.3049 102.807 50.4264 101.988 51.4431 101.056L62.6777 92.2818L62.677 92.2819M62.5227 92.2925C62.5002 92.3142 62.4836 92.328 62.4735 92.3354C62.473 92.3357 62.4725 92.336 62.4721 92.3363M62.5227 92.2925C62.5474 92.2687 62.5791 92.2353 62.6167 92.1904C62.7605 92.0188 62.9034 91.7853 62.9964 91.5921L62.9988 91.587C64.8675 87.7573 68.1239 86.1181 71.8923 85.2828L71.8926 85.2828C74.1945 84.7734 76.4855 84.0709 78.4102 82.9557M62.5227 92.2925C62.5739 92.2887 62.6254 92.2851 62.677 92.2819M62.4721 92.3363C62.4684 92.3386 62.4664 92.3399 62.4664 92.3401C62.4663 92.3403 62.4682 92.3391 62.4721 92.3363ZM62.4721 92.3363C62.4918 92.3246 62.5621 92.2891 62.677 92.2819M62.677 92.2819L78.4102 82.9557M78.4102 82.9557C78.4099 82.9559 78.4096 82.9561 78.4093 82.9563L78.9119 83.8208M78.4102 82.9557L63.8975 92.0256C65.5807 88.576 68.4991 87.0592 72.1087 86.2592C74.4511 85.7408 76.8575 85.0112 78.9119 83.8208M78.4102 82.9557C78.4104 82.9556 78.4105 82.9556 78.4106 82.9555L78.9119 83.8208M78.4102 82.9557C80.0562 81.9989 81.7323 81.5492 83.2034 82.1379C84.6976 82.7358 85.5771 84.238 86.0188 86.2061C86.2983 87.4491 86.588 88.696 86.8785 89.9469C87.8029 93.9265 88.7364 97.9454 89.3842 101.999C89.8432 104.872 90.0526 107.842 90.2585 110.762C90.3759 112.426 90.492 114.073 90.6525 115.676L90.653 115.68C90.7073 116.247 91.0116 116.885 91.4205 117.619L91.421 117.619C91.6539 118.038 91.9314 118.43 92.2446 118.871C92.3131 118.968 92.3832 119.067 92.455 119.169C92.8365 119.712 93.2528 120.333 93.5447 121.038L93.5449 121.039C94.7997 124.075 96.9329 126.198 99.8273 127.84C101.328 128.691 102.471 129.008 103.474 128.946C104.468 128.885 105.481 128.443 106.706 127.453L106.816 127.363C108.402 126.08 110.267 124.569 112.374 123.864C114.835 123.04 116.253 121.409 117.523 119.163C117.552 119.111 117.595 119.029 117.647 118.931C117.763 118.712 117.921 118.415 118.05 118.208C118.158 118.036 118.3 117.832 118.478 117.656C118.646 117.489 118.938 117.254 119.353 117.198L119.354 117.198C120.884 116.99 121.799 116.111 122.721 114.855C122.946 114.549 123.163 114.23 123.393 113.895L123.417 113.86C123.651 113.517 123.898 113.157 124.159 112.805C124.681 112.102 125.29 111.387 126.072 110.807C127.592 109.676 128.86 108.138 130.091 106.402C130.603 105.681 131.098 104.94 131.601 104.186C131.704 104.033 131.806 103.88 131.909 103.726C132.516 102.82 133.139 101.903 133.798 101.026C133.983 100.779 134.125 100.505 134.308 100.151C134.358 100.054 134.411 99.951 134.469 99.8413C134.709 99.3872 135.037 98.8052 135.56 98.3648M78.9119 83.8208C82.0159 82.016 84.2175 82.7456 85.0431 86.4256L145.542 64.9024L146.344 65.5004C146.344 65.5 146.344 65.4996 146.345 65.4992C146.857 64.8126 147.114 64.473 147.43 64.2695C147.667 64.1175 148.035 63.9882 148.878 64.1179L148.879 64.118C150.015 64.2925 151.141 63.9224 152.053 63.5897C152.229 63.5254 152.398 63.4619 152.563 63.4005C153.332 63.1127 153.985 62.8685 154.638 62.7836L154.638 62.7835C154.873 62.7528 155.106 62.721 155.338 62.6893C156.232 62.5673 157.107 62.448 157.965 62.4068C159.04 62.3553 159.97 62.4361 160.726 62.7382C160.725 62.7387 160.811 62.7841 160.948 63.0167C161.09 63.2566 161.227 63.5976 161.361 64.0315C161.54 64.6151 161.676 65.2295 161.812 65.8496C161.886 66.1865 161.961 66.5252 162.043 66.8614L162.044 66.8639C162.226 67.6018 162.281 68.3851 162.29 69.2364C162.294 69.6204 162.289 70.0068 162.284 70.4078L162.282 70.5395C162.276 70.9827 162.271 71.4424 162.282 71.9042C162.324 73.7622 162.613 75.7805 164.177 77.6312L164.177 77.6313C164.445 77.9478 164.633 78.4509 164.775 79.179C164.844 79.5319 164.897 79.9044 164.951 80.3005L164.967 80.4213C165.014 80.7726 165.064 81.1439 165.127 81.4988L165.127 81.4999C165.661 84.5015 167.207 87.0733 168.639 89.4562C168.762 89.6612 168.885 89.8647 169.005 90.067C170.568 92.6839 171.902 95.1322 172.051 98.0219C172.089 98.7858 171.976 99.5877 171.8 100.465C171.741 100.76 171.672 101.077 171.6 101.404C171.539 101.679 171.477 101.962 171.418 102.245C171.251 102.227 171.085 102.213 170.922 102.199C170.789 102.188 170.659 102.177 170.532 102.167C170.184 102.139 169.855 102.112 169.529 102.075C168.614 101.968 168.019 101.796 167.662 101.498L167.661 101.497C162.52 97.2165 157.97 92.618 156.356 86.1081L156.356 86.1074C155.956 84.5005 155.796 82.8798 155.627 81.1797C155.547 80.3673 155.464 79.5367 155.353 78.6809L155.283 78.1364L154.785 77.9038C154.585 77.8102 154.384 77.7167 154.184 77.6241C153.984 77.5311 153.785 77.439 153.588 77.3469L152.906 77.0276L152.411 77.596C152.092 77.9615 151.744 78.3386 151.385 78.7277C150.527 79.6574 149.605 80.656 148.875 81.7289C148.385 82.445 147.998 83.2134 147.65 83.9407C147.572 84.1021 147.497 84.2605 147.423 84.4164C147.155 84.9834 146.903 85.5158 146.616 86.0302C145.905 87.3041 145.067 88.3005 143.608 88.8415L143.604 88.8428C143.243 88.9782 142.99 89.2261 142.823 89.4369C142.652 89.6529 142.52 89.8945 142.418 90.1146C142.215 90.5517 142.067 91.0426 141.966 91.3828C141.499 92.9379 140.597 94.1114 139.452 95.1849C138.875 95.7261 138.245 96.2335 137.581 96.7545C137.448 96.8586 137.313 96.9636 137.178 97.0696C136.644 97.4857 136.091 97.9166 135.56 98.3648M135.56 98.3648C135.561 98.3646 135.561 98.3644 135.561 98.3641L136.205 99.1296L135.56 98.3655C135.56 98.3653 135.56 98.3651 135.56 98.3648ZM42.6299 96.8943C42.6297 96.8945 42.6295 96.8947 42.6293 96.8948L42.0031 96.1152L42.6306 96.8938C42.6304 96.894 42.6302 96.8941 42.6299 96.8943ZM42.6299 96.8943C43.714 96.0236 44.673 95.0252 45.5804 94.0602C45.6751 93.9595 45.7692 93.8592 45.8629 93.7594C46.6804 92.888 47.4621 92.0549 48.3114 91.3018L48.3117 91.3015C49.5774 90.1782 50.8895 89.1722 52.2327 88.1424C53.0494 87.5162 53.8776 86.8813 54.7139 86.2057C54.9939 85.98 55.257 85.7599 55.5108 85.5476C56.2894 84.8962 56.9815 84.3172 57.8125 83.8688L57.873 83.8361L57.9286 83.7954C58.6372 83.2762 59.3475 82.7569 60.0584 82.2373C61.4815 81.197 62.9068 80.1551 64.3249 79.1086L64.3272 79.1069C64.4982 78.98 64.6463 78.8348 64.758 78.7204C64.8071 78.6702 64.8561 78.6186 64.8993 78.5731L64.9201 78.5513C64.9706 78.4982 65.0135 78.4534 65.0542 78.4127C65.0879 78.379 65.115 78.3533 65.1364 78.3339C68.0587 78.2551 70.7134 77.2685 73.1832 76.3153C73.2982 76.2709 73.4127 76.2266 73.5269 76.1825C75.9638 75.2403 78.2193 74.3683 80.616 74.1942C83.2063 74.0092 85.7215 74.1644 87.2196 76.5895L87.2199 76.5901C87.6626 77.3054 88.3421 77.7922 88.9113 78.1618C89.0957 78.2816 89.2679 78.3892 89.4301 78.4905C89.825 78.7372 90.1602 78.9466 90.4677 79.2046C90.6541 79.3609 90.8544 79.5165 91.0392 79.6601C91.0687 79.683 91.0978 79.7056 91.1264 79.7279C91.3423 79.896 91.5378 80.0508 91.7141 80.2064C92.084 80.533 92.2579 80.7706 92.3188 80.9508C94.389 87.1807 96.3683 93.438 98.1808 99.7371C98.2915 100.125 98.2759 100.61 98.1774 101.267C98.1505 101.446 98.1144 101.651 98.0759 101.871C97.9913 102.352 97.8948 102.901 97.8574 103.391M97.8574 103.391C97.8574 103.391 97.8574 103.391 97.8574 103.39L98.8543 103.469L97.8572 103.393C97.8573 103.392 97.8573 103.391 97.8574 103.391ZM126.165 74.6743C124.99 75.1013 124.611 75.5759 124.513 75.9049C124.414 76.2367 124.479 76.832 125.194 77.7986L125.196 77.8008C125.376 78.0463 125.83 78.4106 126.571 78.8083C127.281 79.1892 128.152 79.5467 129.046 79.8229C129.943 80.0999 130.828 80.2842 131.567 80.3383C132.359 80.3963 132.785 80.2888 132.934 80.1935L132.935 80.1931C134.338 79.3004 135.983 78.896 137.43 78.5403C137.756 78.46 138.073 78.3821 138.374 78.3017C140.093 77.8432 141.501 77.2837 142.526 75.9382C142.707 75.6999 142.942 75.598 143.103 75.556C143.253 75.5171 143.382 75.5175 143.449 75.5199C143.581 75.5244 143.718 75.549 143.799 75.5635L143.799 75.5636C143.84 75.5708 143.882 75.5786 143.926 75.5869C144.104 75.6197 144.32 75.6597 144.62 75.7001L146.358 75.9346L145.271 77.3108C145.019 77.6306 144.804 77.9216 144.591 78.2095C144.487 78.3499 144.384 78.4895 144.278 78.6314C143.965 79.0475 143.636 79.4622 143.249 79.8423C143.248 79.8427 143.248 79.8431 143.247 79.8435L142.547 79.1296L126.165 74.6743ZM126.165 74.6743C127.651 74.135 129.16 73.6528 130.691 73.1657L130.831 73.1213C132.31 72.6507 133.809 72.1737 135.293 71.6426M126.165 74.6743L138.336 69.7599C138.336 69.7595 138.337 69.759 138.337 69.7586C137.49 70.5899 136.391 71.2522 135.293 71.6426M135.293 71.6426C135.292 71.6428 135.292 71.6429 135.291 71.6431L134.957 70.7008L135.294 71.6422C135.293 71.6424 135.293 71.6425 135.293 71.6426ZM65.201 78.2811C65.2011 78.2811 65.2002 78.2817 65.1986 78.2827L65.1992 78.2823C65.2004 78.2815 65.201 78.2811 65.201 78.2811ZM123.552 103.268C124.375 102.357 125.11 101.317 125.801 100.341C126.004 100.053 126.204 99.7716 126.4 99.5C127.294 98.2651 128.162 97.1954 129.21 96.4303L123.552 103.268Z" fill="#EE7828" stroke="#202020" stroke-width="2" />
          </svg>
        </button>
      </div>
      <div className='container'>
        {heros.map((hero: Hero) => (
          <Link to={`/info/${hero._id}`} className='hero-item'>
            <div key={hero._id} className='container-link'>
              <img src={hero.images[0]} alt="Hero image" />
              <p>{hero.nickname}</p>

            </div>
          </Link>
        ))}
      </div>
    </div >
  );
};