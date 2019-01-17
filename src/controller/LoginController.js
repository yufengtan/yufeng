import {
	GetMapping,
	RestController
} from 'yufeng-decorates';

@RestController
class AdminController {
	@GetMapping('/login')
	login() {
		return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>login</title></head><body>
			登录页
		</body></html>`
	}
}