<template>
  <LoadingComponent :props="loading" />

  <div class="product-nutrition w-full max-w-[420px] mx-auto text-center">
    <h3 class="text-lg font-semibold mb-4">{{ $t('label.nutrition_facts') }}</h3>

    <!-- Upload area -->
    <div class="border-2 border-dashed rounded-lg p-4 hover:border-primary transition">
      <input
        type="file"
        id="nutritionImage"
        class="hidden"
        ref="nutritionFile"
        accept="image/png, image/jpeg, image/jpg"
        @change="onFileChange"
      />
      <label
        for="nutritionImage"
        class="cursor-pointer flex flex-col items-center justify-center text-gray-500"
      >
        <i class="lab lab-fill-upload text-3xl mb-2"></i>
        <span>{{ $t('label.upload_nutrition_facts') }}</span>
      </label>
    </div>

    <!-- Preview if image already exists -->
    <div v-if="nutritionPreview" class="mt-6">
      <img
        :src="nutritionPreview"
        alt="Nutrition Preview"
        class="rounded-lg shadow-md w-full object-contain mb-4"
      />
      <button
        class="db-btn bg-danger text-white w-full py-2 rounded-md"
        @click="deleteNutritionImage"
        :disabled="loading"
      >
        <i class="lab lab-line-cross mr-1"></i> {{ $t("button.delete") }}
      </button>
    </div>

    <!-- Save button -->
    <button
      v-if="nutritionFile"
      class="db-btn bg-primary text-white w-full py-2 mt-4 rounded-md"
      @click="uploadNutritionImage"
      :disabled="loading"
    >
      <i class="lab lab-fill-save mr-1"></i>
      {{ loading ? $t("message.uploading") : $t("button.save") }}
    </button>
  </div>
</template>

<script>
import alertService from "../../../../services/alertService";
import LoadingComponent from "../../components/LoadingComponent";

export default {
  name: "ProductNutrition",
  components: {
    LoadingComponent,
  },
  props: {
    productId: {
      type: [String, Number],
      required: true,
    },
  },

  data() {
    return {
      nutritionFile: null,
      nutritionPreview: null,
      loading: false,
    };
  },

  mounted() {
    this.fetchNutritionImage();
    // this.productId = this.$route.params.id;
  },

  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.nutritionFile = file;
        this.nutritionPreview = URL.createObjectURL(file);
      }
    },

    async fetchNutritionImage() {
      this.loading = true;
      try {
        const res = await this.$store.dispatch("product/fetchNutritionImage", {
          productId: this.productId,
        });

        if (res?.data?.nutrition_image) {
          this.nutritionPreview = res.data.nutrition_image;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async uploadNutritionImage() {
      if (!this.nutritionFile) return;

      this.loading = true;
      try {
        const res = await this.$store.dispatch("product/uploadNutritionImage", {
          productId: this.productId,
          file: this.nutritionFile,
        });

        this.nutritionPreview = res.data?.nutrition_image || this.nutritionPreview;
        alertService.success(this.$t("message.image_update"));
      } catch (error) {
        alertService.error(error.message || this.$t("message.upload_failed"));
      } finally {
        this.loading = false;
      }
    },

    async deleteNutritionImage() {
      this.loading = true;
      try {
        await this.$store.dispatch("product/deleteNutritionImage", {
          productId: this.productId,
        });
        this.nutritionPreview = null;
        this.nutritionFile = null;
        alertService.success(this.$t("message.image_delete"));
      } catch (error) {
        alertService.error(error.message || this.$t("message.delete_failed"));
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.product-nutrition {
  background: #fff;
  padding: 1rem;
  border-radius: 0.75rem;
}
</style>
