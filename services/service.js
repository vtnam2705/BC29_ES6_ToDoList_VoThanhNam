export class Service {
   arr = [];

   addTask(task) {
      this.arr.push(task);
   };


   findIndex(task) {
      let index = -1;
      this.arr.forEach((ele, idx) => {
         if (ele.taskName === task) {
            index = idx;
         }
      });
      return index;
   };


   deleteTask(task) {
      const index = this.findIndex(task);
      if (index !== -1) {
         this.arr.splice(index, 1);
      }
   };



   filterTaskInComp() {
      return this.arr.filter((task) => {
         if (task.status === "inProgress") {
            return true
         }
         return false;
      })
   }


   filterTaskComplete() {
      return this.arr.filter((task) => {
         if (task.status === "complete") {
            return true
         }
         return false;
      })
   }


   updateTask(task) {
      this.arr = this.arr.map(ele => {
         return ele.taskName === task.taskName ? task : ele
      })
   };


   sortTaskIncre() {
      this.arr.sort((task, nextTask) => {
         if (task.taskName > nextTask.taskName) {
            return 1
         }
         return -1
      });
   }


   sortTaskDecre() {
      this.arr.sort((task, nextTask) => {
         if (task.taskName < nextTask.taskName) {
            return 1
         }
         return -1
      });
   }
}