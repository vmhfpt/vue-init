<template>
  <form @submit="props.onSubmit">
    <div class="app__custom--checkbox--input">
      <div class="mb-4 uppercase">
        <span> This is title </span>
      </div>

      <el-checkbox-group
        v-model="props.purposes"
        size="large"
        class="grid grid-cols-2 md:grid-cols-3 gap-[10px]"
      >
        <el-checkbox
          v-for="(item, index) in purposesCheckbox"
          :key="index"
          :label="item.title"
          :value="item.value"
          border
        />
      </el-checkbox-group>
      <ErrorMessage name="purposes" v-slot="{ message }">
        <p class="text-red-500 mt-2">{{ message }}</p>
      </ErrorMessage>
    </div>

    <div class="app__custom--checkbox--input mt-[50px]">
      <div class="mb-4 uppercase">
        <span> This is title </span>
      </div>

      <div class="mb-4 uppercase relative pl-2">
        <span
          class="after:content-[''] after:absolute after:h-full after:w-[3px] after:bg-red-500 after:top-0 after:left-0"
        >
          This is title
        </span>
      </div>

      <el-checkbox-group
        v-model="props.consumables"
        size="large"
        class="grid grid-cols-2 md:grid-cols-3 gap-[10px]"
      >
        <el-checkbox
          v-for="(item, index) in consumablesCheckbox"
          :key="index"
          :label="item.title"
          :value="item.value"
          border
        />
      </el-checkbox-group>
      <ErrorMessage name="consumables" v-slot="{ message }">
        <p class="text-red-500 mt-2">{{ message }}</p>
      </ErrorMessage>
    </div>

    <div class="app__custom--checkbox--input mt-[30px]">
      <div class="mb-4 uppercase relative pl-2">
        <span
          class="after:content-[''] after:absolute after:h-full after:w-[3px] after:bg-red-500 after:top-0 after:left-0"
        >
          This is title
        </span>
      </div>

      <el-checkbox-group
        v-model="props.components"
        size="large"
        class="grid grid-cols-2 md:grid-cols-3 gap-[10px]"
      >
        <el-checkbox
          v-for="(item, index) in componetsCheckbox"
          :key="index"
          :label="item.title"
          :value="item.value"
          border
        />
      </el-checkbox-group>
      <ErrorMessage name="components" v-slot="{ message }">
        <p class="text-red-500 mt-2">{{ message }}</p>
      </ErrorMessage>
    </div>

    <div class="flex flex-col gap-3 mt-3">
      <el-button
        :class="
          !meta.valid
            ? '!w-full relative !bg-[#d61f1f85] !border-0'
            : '!w-full relative !bg-[#D61F1F] !border-0'
        "
        type="primary"
        native-type="submit"
      >
        <span>Next step</span>
        <div class="absolute h-full right-[10px] flex items-center">
          <el-icon><ArrowRight /></el-icon>
        </div>
      </el-button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { Meta } from 'vee-validate'
import {
  componetsCheckbox,
  consumablesCheckbox,
  purposesCheckbox
} from '../../schemas/appointment/checkboxType'
import { ErrorMessage } from 'vee-validate'
interface Props {
  meta: Meta<any>
  consumables: any
  components: any
  purposes: any
  onSubmit: (validatedValues: any) => void
}

const props = defineProps<Props>()
</script>
