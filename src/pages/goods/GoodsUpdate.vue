<template>
  <article class="container base">
    <h4>기본정보</h4>
    <div class="inner jcsb">
      <section>
        <div class="goods">
          <div class="goods-inner flex">
            <label for="goods-code" class="title">상품코드</label>
            <input type="text" id="goods-code" />
          </div>
          <div class="goods-inner flex">
            <label for="goods-name" class="title">상품명</label>
            <input type="text" id="goods-name" />
          </div>
        </div>
        <div class="category-wrap flex">
          <label for="category" class="title">분류</label>
          <div class="select-box">
            <select id="category">
              <option value="대분류">대분류</option>
            </select>
            <select id="category">
              <option value="중분류">중분류</option>
            </select>
            <select id="category">
              <option value="소분류">소분류</option>
            </select>
          </div>
        </div>
        <div class="delivery-select flex">
          <p class="title">택배사</p>
          <select id="delivery">
            <option value="1">우체국택배</option>
            <option value="1">cj대한통운</option>
            <option value="1">한진택배</option>
            <option value="1">롯데택배</option>
          </select>
        </div>
        <div class="delivety-price flex">
          <label for="price" class="title">배송비</label>
          <input type="text" id="price" />
        </div>
      </section>
      <section>
        <ul>
          <li class="flex">
            <label for="salePrice" class="title">판매가</label
            ><input type="text" id="salePrice" />
          </li>
          <li class="flex">
            <label for="supplyPrice" class="title">공급가</label
            ><input type="text" id="supplyPrice" />
          </li>
          <li class="flex">
            <label for="discountPrice" class="title">할인가</label
            ><input type="text" id="discountPrice" />
          </li>
        </ul>
      </section>
    </div>
  </article>
  <article class="container">
    <h4>이미지정보</h4>
    <div class="inner">
      <section class="flex">
        <p class="title">상품이미지</p>
        <div class="img-wrap">
          <label for="imgUpload">
            <v-icon>mdi-plus-circle-outline</v-icon>
            <small>대표이미지</small>
          </label>
          <input type="file" id="imgUpload" />
        </div>
      </section>
      <section class="flex">
        <p class="title">상품상세</p>
        <div class="goods-detail">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </section>
    </div>
  </article>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.base {
  margin-bottom: 1.5%;
}

.flex {
  margin: 10px 0;
  align-items: center;
}
.inner {
  width: 100%;
  margin-top: 1.5%;
  padding: 1.5% 5%;
  border-radius: 5px;
  background: #fff;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  font-size: 0.85rem;
  section {
    width: 49%;
    select {
      width: 80%;
      padding: 5px 10px;
      border: 1px solid #c4c4c4;
    }
  }
}

.title {
  display: block;
  width: 100px;
  margin-right: 10px;
  font-weight: bold;
}

input[type="text"] {
  width: 80%;
  padding: 5px 10px;
  border: 1px solid #c4c4c4;
  transition: 0.3s;
  &:focus {
    transition: 0.3s;
    border: 1px solid rgb(23, 77, 194);
  }
}

.category-wrap {
  .select-box {
    width: 80%;
    display: flex;
    justify-content: space-between;
    select {
      width: 33%;
    }
  }
}

.img-wrap {
  label {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px dashed #aaa;
    padding: 15px;
    .v-icon {
      font-size: 2rem;
      margin-bottom: 5px;
    }
    small {
      color: rgb(211, 74, 11);
      font-weight: bold;
    }
  }
  input[type="file"] {
    display: none;
  }
}
</style>
