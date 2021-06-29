<template>
    <div>


    <!-- Main content -->
    <section class="content pt-4">
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title mt-2" >Update Category</h3>
                <div class="card-tools">
                    <router-link to='/category' class="btn btn-success " style="color:white">All-Category</router-link>
                </div>
              </div>
              <!-- /.card-header -->
                    <form class="form-horizontal" @submit.prevent='CategoryUpdateBtn'>
                <div class="card-body">
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-3 col-form-label">Category Name</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="inputEmail3" placeholder="Email" v-model="form.name" name="name" :class="{'is-invalid' :form.errors.has('name')}">
                      <div v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Status</label>
                    <div class="col-sm-9">
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" id="active" value="1" v-model="form.status" name="status">
                          <label class="form-check-label" for="inlineCheckbox1">Active</label>
                      </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" id="inactive" value="0" v-model="form.status" name="status">
                          <label class="form-check-label" for="inlineCheckbox1">Inactive</label>
                      </div>
                      <div v-if="form.errors.has('status')" v-html="form.errors.get('status')" />

                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-info" style="color:white;">Update Category</button>
                </div>
                <!-- /.card-footer -->
              </form>
              <!-- /.card-body -->
            </div>
            </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
    export default {
      name:"create",
      data: () => ({
    form: new Form({
      id:'',
      name: '',
      status:1
    })
  }),
  mounted(){
      this.GetCategoryData();
  },
  methods: {
    CategoryUpdateBtn () {
      this.form.post('/update-category')
     .then(()=>{
         this.$router.push('/category',); //(/category->web.php+>route name)
        toastr.success('Category Updatedd Sucessfully.', {timeOut: 5000})
       })
     },
     GetCategoryData:function(){
         let test=this.$route.params.id;
         axios.get('/show-category/' + test).then((response)=>{
             this.form.fill(response.data.category);
         }).catch(()=>{

         })
     }
  }
}
</script>
