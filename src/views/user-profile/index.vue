<template>
  <div class="user-profile">
    <van-nav-bar
      class="app-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <van-cell title="头像" is-link center>
      <van-image width="30" height="30" round fit="cover" :src="user.photo" />
    </van-cell>
    <van-cell
      title="昵称"
      is-link
      :value="user.name"
      @click="isEditNameShow = true"
    />
    <van-cell title="性别" is-link :value="user.gender === 0 ? '男' : '女'" />
    <van-cell title="生日" is-link :value="user.birthday" />

    <van-popup
      v-model="isEditNameShow"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <update-name :name="user.name" @update-name="user.name=$event" @close="isEditNameShow = false"></update-name>
    </van-popup>
  </div>
</template>

<script>
import { getUserProfile } from "@/api/user";
import UpdateName from "./component/update-name.vue";
export default {
  data() {
    return {
      user: {}, // 用户数据
      isEditNameShow: false, // 编辑昵称的显示状态
      isEditGenderShow: false, // 编辑性别的显示状态
      isEditBirthdayShow: false, // 编辑生日的显示状态
      isEditPhotoShow: false, // 编辑头像的显示状态
      previewImage: null, // 上传预览图片
    };
  },
  components: {
    UpdateName,
  },
  created() {
    this.loadUserProfile();
  },
  methods: {
    async loadUserProfile() {
      const { data } = await getUserProfile();
      this.user = data.data;
    },
  },
};
</script>

<style lang="less" scoped>
.van-popup {
  background-color: #f5f7f9;
}

.update-photo-popup {
  background-color: #000;
}
</style>