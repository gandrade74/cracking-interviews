const productExceptSelf = (nums) => {
  const length = nums.length;
  const answer = new Array(length);

  answer[0] = 1;

  for (let i = 1; i < length; i++) {
    let x = i - 1;
    answer[i] = nums[x] * answer[x];
  }

  let R = 1;

  for (let i = length - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R *= nums[i];
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
