import * as Api from '../../api.js';

const modal = document.querySelector('.modal'),
	modalBg = document.querySelector('.modal-background'),
	modalbtn = document.querySelector('.modal-close'),
	delCencelBtn = document.querySelector('#delcencelBtn'),
	submitBtn = document.querySelector('#submitBtn'),
	delCompletBtn = document.querySelector('#delCompletBtn');

modalBg.addEventListener('click', closeModal);
modalbtn.addEventListener('click', closeModal);
delCencelBtn.addEventListener('click', closeModal);
submitBtn.addEventListener('click', openModal);
delCompletBtn.addEventListener('click', delUser);

//유저 정보 삭제
function delUser(e) {
	//del api
	closeModal();
}
//모달 닫기 기능
function closeModal(e) {
	e.preventDefault();
	modal.classList.remove('is-active');
}
//모달 열기 기능
function openModal(e) {
	e.preventDefault();
	modal.classList.add('is-active');
}


async function handleSubmit(e) {
	e.preventDefault();
  

	if (!isPasswordValid) {
	  return alert(
		'비밀번호가 4글자 이상인지 확인해 주세요.'
	  );
	}
  
	// 로그인 api 요청
	try {
	  const data = { password };
	
	  const result = await Api.delete('/api/signout', data);
	  const token = result.token;
  
	  // 로그인 성공, 토큰을 세션 스토리지에 저장
	  // 물론 다른 스토리지여도 됨
	  sessionStorage.deleteItem('token', token);
  
	  alert(`회원정보가 안전하게 삭제되었습니다.`);
  
	  // 탈퇴 성공
  
	  // 기본 페이지로 이동
	  window.location.href = '/';
	} catch (err) {
	  console.error(err.stack);
	  alert(`회원삭제 과정에서 오류가 발생했습니다: ${err.message}`);
	}
  }