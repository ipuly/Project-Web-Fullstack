<template>
    <div>
        <div class="row mx-1 justify-content-center" >
            <div class="row my-4 col-12" v-show="!success">
                <!-- v-if="Object.keys(studentsData).length === 0" -->
                <h3 v-if="studentsData.length == 0">Tidak ada Data</h3>
                <div class="card-body border border-dark rounded col-md-4 col-sm-12 mb-3" v-for="item in studentsData" :key="item.id">
                    <h5 class="card-title">
                        {{ item.nama + ", " + item.umur + " Years Old" }}
                    </h5>
                    <p class="card-text mb-3">{{ item.deskripsi_diri }}</p>
                    <p class="card-text">Email&emsp;&emsp;&ensp;&nbsp;:&nbsp;{{ item.email }}</p>
                    <p class="card-text">Soft Skills&emsp;:&nbsp;{{ item.soft_skill }}</p>
                    <p class="card-text">Hard Skills&ensp;:&nbsp;{{ item.hard_skill }}</p>
                    <p class="card-text">Interest&emsp;&ensp;&nbsp;:&nbsp;{{ item.interest }}</p>

                    <div class="d-flex flex-row justify-content-between">
                        <div>
                            <router-link :to="{ path: '/update/' + item.id }">
                                <button class="btn btn-primary mr-2">Update</button>
                            </router-link>
                            <router-link to="/">
                                <button class="btn btn-danger" @click="deleteStudentsFunction(item.id, item.nama)">
                                    Delete
                                </button>
                            </router-link>
                        </div>
                            
                        <div>
                            <img class="male" v-if="item.jenis_kelamin == 'Male'" src="../assets/male.png" alt="" />
                            <img class="female" v-else-if="item.jenis_kelamin == 'Female'" src="../assets/female.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <SuccessDeleteComponentVue v-show="success" />
        </div>
    </div>
</template>

<script>
import studentsServices from '@/services/studentsServices';
import SuccessDeleteComponentVue from './SuccessDeleteComponent.vue';

export default {
    name: 'ViewComponent',
    data() {
        return {
            studentsData: [],
            success: false,
        };
    },
    methods: {
        getStudents() {
            studentsServices.getAll()
                .then((response) => {
                    this.studentsData = response.data;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        deleteStudentsFunction(id, nama) {
            if (confirm(`Apakah anda yakin hapus data ${nama} ?`)) {
                studentsServices.deleteStudents(id)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
                this.success = true;
            } else {
                alert("Hapus dibatalkan!")
            }
        },
    },
    mounted() {
        this.getStudents();
    },
    components: {
        SuccessDeleteComponentVue,
    },
};
</script>

<style>

</style>