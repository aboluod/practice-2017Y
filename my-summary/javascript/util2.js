// 正确与否有待进一步考察，取自别人代码
var isOrganizationCode = /[0-9A-Z]+-+(X|[0-9])/;//组织机构代码
var isUnifiedSocialCreditCode = /^[0-9A-Z]{17}([0-9])$/;//统一社会信用代码

/** 统一社会信用代码的校验（复星金服供应链在用的正则）*/
function validateCreditCode (value) {
	return value && /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(value)
} 

/** 手机号的正则校验规则
* phone必须是字符串
*/
function validateMobile (phone) {
	var mobile = phone && phone.replace(/\D/g, '')
	// 两个正则都可以用，第二条相对比较专业些
  	// return mobile.length === 11 && /^((13|14|15|17|18|19)[0-9]{1}\d{8})$/.test(mobile)
  	return mobile.length === 11 && /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(mobile)
}
