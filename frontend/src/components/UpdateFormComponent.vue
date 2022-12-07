<template>
    <div>    
        <div class="row justify-content-center my-5 w-100">
            <div class="col-8 p-5 rounded border border-primary" v-show="!success">
                <h2 class="text-center mb-5">Update Student</h2>
                <form @submit.prevent="updateStudents">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name">Student Name</label>
                            <input v-model="studentsData.nama" type="text" class="form-control" id="name" name="nama"
                                placeholder="Enter Name" required>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="softskill">Soft Skill</label>
                            <input v-model="studentsData.soft_skill" type="text" class="form-control" id="softskill"
                                name="soft_skill" placeholder="Enter Soft Skill" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="age">Student Age</label>
                            <input v-model="studentsData.umur" type="number" class="form-control" id="age" name="umur"
                                placeholder="Enter age" required>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="gender">Gender</label>
                            <select id="gender" v-model="studentsData.jenis_kelamin" class="form-control" name="jenis_kelamin" required>
                                <option disabled selected label="Choose Gender"></option>
                                <option id="male">Male</option>
                                <option id="female">Female</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="hardskill">Hard Skill</label>
                            <input v-model="studentsData.hard_skill" type="text" class="form-control" id="hardskill"
                                name="hard_skill" placeholder="Enter hard skills" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="email">Student Email</label>
                            <input v-model="studentsData.email" type="email" class="form-control" id="email" name="email"
                                placeholder="Enter email" required>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="interest">Interest</label>
                            <select v-model="studentsData.interest" id="interest" class="form-control" name="interest" required>
                                <option disabled selected label="Choose Interest"></option>
                                <option id="datascience">Data Science</option>
                                <option id="network">Network</option>
                                <option id="webfrontend">Web Frontend</option>
                                <option id="webbackend">Web Backend</option>
                                <option id="mobileapp">Mobile App</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="selfDescription">Self Description</label>
                            <textarea v-model="studentsData.deskripsi_diri" class="form-control" name="deskripsi_diri"
                                id="selfDescription" cols="100" required>
                                    </textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
            <SuccessUpdateComponentVue v-show="success"></SuccessUpdateComponentVue>
        </div>
    </div>
</template>

<script>
import StudentsServices from "@/services/studentsServices";
import SuccessUpdateComponentVue from "@/components/SuccessUpdateComponent.vue";

export default {
    name: 'UpdateFormComponent',
    components: {
        SuccessUpdateComponentVue,
    },
    data() {
        return {
            studentsData: {
                deskripsi_diri: null,
                email: null,
                hard_skill: null,
                interest: null,
                jenis_kelamin: null,
                nama: null,
                soft_skill: null,
                umur: null,
            },
            success: false,
        };
    },
    methods: {
        updateStudents() {
            let data = this.studentsData;
            let id = this.$route.params.id;
            StudentsServices.updateStudents(id, data)
                .then((response) => {
                    console.log(response.data);
                    this.success = true;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        getStudentsById() {
            let id = this.$route.params.id;
            StudentsServices.getStudentsById(id)
                .then((response) => {
                    this.studentsData = response.data;
                    console.log(this.studentsData);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getStudentsById();
    },
}
</script>

<style>

</style>