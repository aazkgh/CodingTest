#include <stdio.h>

int main(void) {
	int part, lec = 0;

	scanf("%d", &part);

	for (int i = 0; i < part; i++) {
		int sum = 0;
		float avg = 0.0; float total_scr = 0.0;
		scanf("%d", &lec);

		for (int j = 0; j < lec; j++) {
			int cred = 0;
			float grade  = 0.0;

			scanf("%d %f", &cred,&grade);
			sum += cred;
			total_scr += cred * grade;
		}
		avg = total_scr / sum;
		printf("%d %.1f\n", sum, avg);
	}
	return 0;
}