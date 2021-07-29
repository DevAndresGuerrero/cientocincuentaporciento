<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-12 col-md-10">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-header">
            <div class="d-flex">
                <label for="number" class="col-form-label">
                  Digite Numero:
                </label>
                <input
                  type="text"
                  id="number"
                  class="form-control col-2 mx-2"
                  v-model="form.number"
                >
                <button
                  type="button"
                  class="btn btn-success"
                  @click="getRombo"
                >
                  Rombotizar
                </button>
            </div>
          </div>
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="p-5">
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <!-- For A -->
                      <tr v-for="(col, i) in matriz" :key="i">

                        <!-- For B -->
                        <td
                          class="text-center font-weight-bolder"
                          v-for="(row, j) in col" :key="j">
                          {{ row }}
                        </td>
                        <!-- End For B -->

                      </tr>
                      <!-- End For A -->
                    </table>
                  </div>
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
    name: "Home",
    created(){
      if (!User.loggedIn()) {
        this.$router.push({name: '/'});
      }
      this.getRombo();
    },
    data() {
      return {
        matriz: [],
        form: {
          number: 5
        }
      }
    },
    methods: {
      getRombo(){
        axios.post('/api/rombo', this.form)
          .then((res) => this.matriz = res.data)
          .catch(err => console.error(err))
      }
    }
  }
</script>
