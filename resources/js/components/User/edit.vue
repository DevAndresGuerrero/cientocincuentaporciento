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
                    <h1 class="h4 text-gray-900 mb-4">User Update</h1>
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

                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="isUpdatePassword">
                        <label class="form-check-label" for="defaultCheck1">
                          Update password?
                        </label>
                      </div>
                    </div>

                    <div class="form-group row" v-if="isUpdatePassword">
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
    name: "userEdit",
    created(){
      if (!User.loggedIn()) {
        this.$router.push({name: '/'});
      }

      let id = this.$route.params.id;
      axios.get('/api/users/'+id)
        .then(({data}) => (this.form = data.data))
        .catch(err => console.error(err))

    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
        errors:{},
        isUpdatePassword: false,
      };
    },
    methods: {
      save() {
        let id = this.$route.params.id;
        axios.put('/api/users/'+id, this.form)
          .then(() => {
            this.$router.push({name: 'userIndex'});
            Notification.success();
          })
          .catch(err => this.errors = err.response.data.errors);
      }
    }
  }
</script>

<style>
</style>
