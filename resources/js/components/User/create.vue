<template>
  <div>
    <div class="row mb-3">
      <div class="col-12">
        <router-link
          :to="{name: 'userIndex'}"
          class="btn btn-primary">
          All Users
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-xl-6 col-lg-8">
        <div class="card o-hidden border-0 shadow-lg">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="p-5">

                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add User</h1>
                  </div>

                  <form class="user" @submit.prevent="save">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="Fullname"
                        v-model="form.name"
                      />
                      <small class="text-danger" v-if="errors.name">
                        {{ errors.name[0] }}
                      </small>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                        v-model="form.email"
                      />
                      <small class="text-danger" v-if="errors.email">
                        {{ errors.email[0] }}
                      </small>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="form.password"
                        />
                        <small class="text-danger" v-if="errors.password">
                          {{ errors.password[0] }}
                        </small>
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                          v-model="form.password_confirmation"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-user btn-block">
                      Save
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userCreate",
    created(){
      if (!User.loggedIn()) {
        this.$router.push({name: '/'});
      }
    },
    data() {
      return {
        form: {
          name: null,
          email: null,
          password: null,
          password_confirmation: null,
        },
        errors:{}
      };
    },
    methods: {
      save() {
        axios.post('/api/users', this.form)
          .then(() => {
            this.$router.push({name: 'userIndex'});
            Notification.success();
          })
          .catch(err => this.errors = err.response.data.errors)
      }
    }
  }
</script>

<style>
</style>
