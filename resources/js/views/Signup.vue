<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const form = ref({
  email: '',
  name: '',
  password: '',
  password_confirmation: ''
})
const errors = ref([])

const signup = async () => {
  await axios.get('/sanctum/csrf-cookie')
  await axios
    .post('/fortify/register', form.value)
    .then(() => {
      router.push('/login')
    })
    .catch((reason) => {
      errors.value = reason?.response?.data?.errors ?? {}
    })
}
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-6 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
        Create your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="signup()">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="form.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            />
            <template v-if="errors.email">
              <div v-for="error in errors.email" class="text-sm text-red-700 m-1" role="alert">
                {{ error }}
              </div>
            </template>
          </div>
        </div>

        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
            >Username</label
          >
          <div class="mt-2">
            <input
              v-model="form.name"
              id="username"
              name="username"
              type="text"
              autocomplete="username"
              required
              class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <template v-if="errors.name">
              <div v-for="error in errors.name" class="text-sm text-red-700 m-1" role="alert">
                {{ error }}
              </div>
            </template>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              v-model="form.password"
              id="password"
              name="password"
              type="password"
              required
              class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <template v-if="errors.password">
              <div v-for="error in errors.password" class="text-sm text-red-700 m-1" role="alert">
                {{ error }}
              </div>
            </template>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password for confirmation</label
            >
          </div>
          <div class="mt-2">
            <input
              v-model="form.password_confirmation"
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              required
              class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <router-link
          to="/login"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Log in</router-link
        >
      </p>
    </div>
  </div>
</template>
