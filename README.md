# study_project_1

- 쇼핑몰 장바구니 만들기

## Memo

프로젝트 샘플 => [https://shooping-basket-project.firebaseapp.com/](https://shooping-basket-project.firebaseapp.com/)

### `NPM INSTALL`

Dependencies 설치후 테스트 하시면 됩니다.

## 조건

- React
- 필요시 Redux 혹은 MobX 사용.

## 목적

- 필요한 구현을 React component와 각 module로 분리하였습니다.

## 구현 상세

아래의 2가지 화면과 각 화면이 공유하는 navigation bar를 구현하였습니다.

### 상품 목록 화면

- 데이터는 dummy 파일 방식으로 구성하였습니다.
- 각 상품에는 장바구니 버튼이 있어서, 버튼을 누르면 장바구니에 상품이 추가됩니다.
![스크린샷 2020-03-06 오후 7 36 38](https://user-images.githubusercontent.com/56405613/76076359-10f59900-5fe2-11ea-9e6a-28ed1ae82372.png)


### 장바구니 화면

- 장바구니가 비어있는 경우에는 '비어있음'을 표시합니다.
![스크린샷 2020-03-06 오후 7 42 33](https://user-images.githubusercontent.com/56405613/76076678-a42ece80-5fe2-11ea-841c-b91aee11042e.png)

- 장바구니에 상품이 1개 이상 담겨있는 경우 상품 목록을 보여줍니다.
- 각 상품에는 +, - 버튼이 있어서 장바구니에 담겨있는 상품 개수를 조정할 수 있습니다.
- 0개가 된 경우 장바구니에서 상품은 제거됩니다.
- 페이지 맨 하단에는 결제하기 버튼이 있습니다.
![스크린샷 2020-03-06 오후 7 37 04](https://user-images.githubusercontent.com/56405613/76076449-3c788380-5fe2-11ea-840b-099b69f7b2f8.png)
- 결제하기 버튼을 누르면 '구매가 완료되었습니다.'가 뜨고 장바구니가 비워집니다.
![스크린샷 2020-03-06 오후 7 37 32](https://user-images.githubusercontent.com/56405613/76076473-4bf7cc80-5fe2-11ea-9f0a-debb7d88070d.png)



### Navigation Bar

- 상품 목록 / 장바구니 페이지에 공통으로 존재합니다.
- 상품 목록 / 장바구니 2개의 메뉴로 구성되며 장바구니 텍스트 옆에는 현재 장바구니에 담겨있는 상품 개수가 badge 형태로 보여집니다. 단, 상품이 담겨있지 않은 경우에는 badge가 보이지 않습니다.
